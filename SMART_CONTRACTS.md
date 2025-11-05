# 🎮 Smart Contracts for Catchxyz Game

## Overview

This project includes a smart contract for on-chain leaderboard functionality. Players can submit their scores to the blockchain, and the leaderboard is stored entirely on-chain on Base network.

## Contract: CatchGameLeaderboard

### Features

- **On-chain Score Storage**: All player scores are stored on the blockchain
- **Leaderboard Management**: Automatically maintains a sorted leaderboard of top players
- **Player Best Scores**: Tracks each player's best score
- **Rank Lookup**: Players can check their rank in the leaderboard

### Contract Functions

- `submitScore(uint256 score)` - Submit a score to the leaderboard (only updates if it's a new best)
- `getTopPlayers(uint256 count)` - Get the top N players
- `getLeaderboard()` - Get the entire leaderboard
- `getPlayerScore(address player)` - Get a player's best score
- `getPlayerRank(address player)` - Get a player's rank (returns max uint if not found)
- `getLeaderboardLength()` - Get total number of entries

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Private key for deployment (NEVER commit this!)
PRIVATE_KEY=your_private_key_here

# Base Network RPC URLs
BASE_MAINNET_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Basescan API key for contract verification
BASESCAN_API_KEY=your_basescan_api_key_here
```

**⚠️ WARNING**: Never commit your `.env` file or share your private key!

### 3. Compile Contracts

```bash
npm run compile
```

This compiles all contracts in the `contracts/` directory.

## Deployment

### Deploy to Base Sepolia (Testnet)

1. Get Base Sepolia ETH from a faucet
2. Set your private key in `.env`
3. Deploy:

```bash
npm run deploy:baseSepolia
```

4. Copy the contract address from the output
5. Update `client/src/lib/contract.ts` with the contract address:

```typescript
export const CONTRACT_ADDRESS = '0x...'; // Your deployed contract address
```

### Deploy to Base Mainnet

1. Make sure you have ETH on Base mainnet
2. Set your private key in `.env`
3. Deploy:

```bash
npm run deploy:base
```

4. Verify the contract on Basescan:

```bash
npm run verify -- --network base <CONTRACT_ADDRESS>
```

### Deploy Locally (for testing)

```bash
npm run deploy:local
```

## Frontend Integration

The frontend is already integrated with the smart contract. After deployment:

1. **Update Contract Address**:
   - Edit `client/src/lib/contract.ts`
   - Set `CONTRACT_ADDRESS` to your deployed contract address
   - Or set environment variable `VITE_CONTRACT_ADDRESS` in `.env`

2. **Rebuild Frontend**:
   ```bash
   npm run build
   ```

3. **Test the Integration**:
   - Connect your wallet
   - Play the game
   - Submit a score - it will be saved on-chain!

## Contract Structure

```
contracts/
  └── CatchGameLeaderboard.sol  # Main leaderboard contract

scripts/
  └── deploy.ts                 # Deployment script

client/src/lib/
  ├── contract.ts               # Contract ABI and utilities
  └── web3.ts                   # Web3 integration helpers
```

## Testing

### Local Testing

1. Start Hardhat node:
```bash
npx hardhat node
```

2. In another terminal, deploy:
```bash
npm run deploy:local
```

3. Test contract functions using Hardhat console or scripts

### Testnet Testing

1. Deploy to Base Sepolia
2. Test with testnet ETH
3. Verify on Basescan Sepolia

## Gas Costs

- **Submit Score**: ~50,000 - 100,000 gas (depends on leaderboard size)
- **View Functions**: No gas (read-only)

## Security Considerations

- ✅ Only updates if score is better than player's previous best
- ✅ Maximum leaderboard size (100 entries) to prevent gas issues
- ✅ No admin functions (fully decentralized)
- ⚠️ Bubble sort is used for simplicity - fine for small leaderboards

## Next Steps

- [ ] Add rewards/tokens for top players
- [ ] Add NFT badges for achievements
- [ ] Implement daily/weekly leaderboards
- [ ] Add game statistics tracking

## Troubleshooting

### Contract Address Not Set Error

If you see "Contract address not set" error:
1. Make sure you've deployed the contract
2. Update `CONTRACT_ADDRESS` in `client/src/lib/contract.ts`
3. Rebuild the frontend

### Transaction Fails

- Check you have enough ETH for gas
- Make sure you're on the correct network (Base)
- Verify the contract is deployed correctly

### Leaderboard Not Loading

- Check network connection
- Verify contract address is correct
- Check browser console for errors

## Support

For issues or questions, check the game frontend or contract code comments.

