// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title CatchGameLeaderboard
 * @notice On-chain leaderboard for Catchxyz game
 * @dev Players can submit their scores and view the top players
 */
contract CatchGameLeaderboard {
    struct ScoreEntry {
        address player;
        uint256 score;
        uint256 timestamp;
    }

    // Mapping from player address to their best score
    mapping(address => uint256) public playerScores;
    
    // Array of all score entries
    ScoreEntry[] public leaderboard;
    
    // Maximum number of entries in leaderboard
    uint256 public constant MAX_LEADERBOARD_SIZE = 100;
    
    // Events
    event ScoreSubmitted(address indexed player, uint256 score, uint256 timestamp);
    event LeaderboardUpdated(address indexed player, uint256 newRank);
    
    /**
     * @notice Submit a score to the leaderboard
     * @param score The score achieved by the player
     */
    function submitScore(uint256 score) external {
        require(score > 0, "Score must be greater than 0");
        
        address player = msg.sender;
        uint256 currentBest = playerScores[player];
        
        // Only update if this is a new best score
        if (score > currentBest) {
            playerScores[player] = score;
            
            // Add to leaderboard
            leaderboard.push(ScoreEntry({
                player: player,
                score: score,
                timestamp: block.timestamp
            }));
            
            // Sort leaderboard (simple insertion sort for small arrays)
            _sortLeaderboard();
            
            // Keep only top MAX_LEADERBOARD_SIZE entries
            if (leaderboard.length > MAX_LEADERBOARD_SIZE) {
                leaderboard.pop();
            }
            
            emit ScoreSubmitted(player, score, block.timestamp);
        }
    }
    
    /**
     * @notice Get the top N players from the leaderboard
     * @param count Number of top players to return
     * @return Array of ScoreEntry structs
     */
    function getTopPlayers(uint256 count) external view returns (ScoreEntry[] memory) {
        uint256 length = leaderboard.length;
        if (count > length) {
            count = length;
        }
        
        ScoreEntry[] memory topPlayers = new ScoreEntry[](count);
        for (uint256 i = 0; i < count; i++) {
            topPlayers[i] = leaderboard[i];
        }
        
        return topPlayers;
    }
    
    /**
     * @notice Get the entire leaderboard
     * @return Array of all ScoreEntry structs
     */
    function getLeaderboard() external view returns (ScoreEntry[] memory) {
        return leaderboard;
    }
    
    /**
     * @notice Get a player's best score
     * @param player Address of the player
     * @return The player's best score
     */
    function getPlayerScore(address player) external view returns (uint256) {
        return playerScores[player];
    }
    
    /**
     * @notice Get the total number of entries in the leaderboard
     * @return The length of the leaderboard array
     */
    function getLeaderboardLength() external view returns (uint256) {
        return leaderboard.length;
    }
    
    /**
     * @notice Get a player's rank (0-indexed, -1 if not in leaderboard)
     * @param player Address of the player
     * @return The player's rank or type(uint256).max if not found
     */
    function getPlayerRank(address player) external view returns (uint256) {
        for (uint256 i = 0; i < leaderboard.length; i++) {
            if (leaderboard[i].player == player) {
                return i;
            }
        }
        return type(uint256).max; // Not found
    }
    
    /**
     * @notice Sort the leaderboard by score (descending)
     * @dev Uses bubble sort for simplicity (fine for small arrays)
     */
    function _sortLeaderboard() internal {
        uint256 length = leaderboard.length;
        if (length <= 1) return;
        
        // Bubble sort (simple but fine for small leaderboards)
        for (uint256 i = 0; i < length - 1; i++) {
            for (uint256 j = 0; j < length - i - 1; j++) {
                if (leaderboard[j].score < leaderboard[j + 1].score) {
                    ScoreEntry memory temp = leaderboard[j];
                    leaderboard[j] = leaderboard[j + 1];
                    leaderboard[j + 1] = temp;
                }
            }
        }
    }
}

