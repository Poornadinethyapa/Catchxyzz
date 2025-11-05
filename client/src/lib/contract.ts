import { ethers } from 'ethers';

// Contract ABI - minimal interface for the leaderboard
export const LEADERBOARD_ABI = [
  'function submitScore(uint256 score)',
  'function getTopPlayers(uint256 count) view returns (tuple(address player, uint256 score, uint256 timestamp)[])',
  'function getLeaderboard() view returns (tuple(address player, uint256 score, uint256 timestamp)[])',
  'function getPlayerScore(address player) view returns (uint256)',
  'function getPlayerRank(address player) view returns (uint256)',
  'function getLeaderboardLength() view returns (uint256)',
  'event ScoreSubmitted(address indexed player, uint256 score, uint256 timestamp)',
] as const;

export interface ScoreEntry {
  player: string;
  score: bigint;
  timestamp: bigint;
}

// Contract address - UPDATE THIS after deploying!
// For now, use a placeholder. You'll need to deploy the contract and update this.
export const CONTRACT_ADDRESS = process.env.VITE_CONTRACT_ADDRESS || '0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c';

/**
 * Get contract instance
 */
export function getContract(provider: ethers.Provider, signer?: ethers.Signer) {
  if (!CONTRACT_ADDRESS) {
    throw new Error('Contract address not set. Please deploy the contract first.');
  }
  
  const contractProvider = signer || provider;
  return new ethers.Contract(CONTRACT_ADDRESS, LEADERBOARD_ABI, contractProvider);
}

/**
 * Submit score to the leaderboard
 */
export async function submitScore(
  provider: ethers.Provider,
  signer: ethers.Signer,
  score: number
): Promise<ethers.TransactionResponse> {
  const contract = getContract(provider, signer);
  return await contract.submitScore(score);
}

/**
 * Get top players from leaderboard
 */
export async function getTopPlayers(
  provider: ethers.Provider,
  count: number
): Promise<ScoreEntry[]> {
  const contract = getContract(provider);
  const entries = await contract.getTopPlayers(count);
  
  return entries.map((entry: any) => ({
    player: entry.player,
    score: entry.score,
    timestamp: entry.timestamp,
  }));
}

/**
 * Get player's best score
 */
export async function getPlayerScore(
  provider: ethers.Provider,
  playerAddress: string
): Promise<bigint> {
  const contract = getContract(provider);
  return await contract.getPlayerScore(playerAddress);
}

/**
 * Get player's rank
 */
export async function getPlayerRank(
  provider: ethers.Provider,
  playerAddress: string
): Promise<number | null> {
  const contract = getContract(provider);
  const rank = await contract.getPlayerRank(playerAddress);
  
  // If rank is max uint256, player is not in leaderboard
  if (rank === BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')) {
    return null;
  }
  
  return Number(rank);
}

/**
 * Get full leaderboard
 */
export async function getLeaderboard(
  provider: ethers.Provider
): Promise<ScoreEntry[]> {
  const contract = getContract(provider);
  const entries = await contract.getLeaderboard();
  
  return entries.map((entry: any) => ({
    player: entry.player,
    score: entry.score,
    timestamp: entry.timestamp,
  }));
}

