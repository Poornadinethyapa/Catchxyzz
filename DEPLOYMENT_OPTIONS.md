# 🚀 How to Deploy Your Smart Contract

You have **two options** to deploy your contract. We recommend **Hardhat** (Option 1) since it's already set up.

---

## Option 1: Deploy with Hardhat (Recommended ✅)

We've already set up Hardhat for you! This is the easiest way.

### Prerequisites:
1. ✅ Hardhat installed (already done)
2. ✅ Contract compiled (already done)
3. ✅ `.env` file created with your private key
4. ⏳ Base Sepolia testnet ETH (get from faucet)

### Steps:

#### 1. Get Testnet ETH

First, get some Base Sepolia testnet ETH for gas fees:
- **Coinbase Faucet**: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet
- **Alchemy Faucet**: https://www.alchemy.com/faucets/base-sepolia

Make sure you're requesting ETH for **Base Sepolia** testnet!

#### 2. Deploy to Testnet

Open your terminal in the project root and run:

```bash
npm run deploy:baseSepolia
```

#### 3. What You'll See

```
Deploying CatchGameLeaderboard contract...
CatchGameLeaderboard deployed to: 0x1234567890abcdef1234567890abcdef12345678
```

**Copy that address!** That's your contract address.

#### 4. Add Contract Address to .env

Update your `.env` file:
```env
VITE_CONTRACT_ADDRESS=0x1234567890abcdef1234567890abcdef12345678
```

#### 5. Deploy to Mainnet (When Ready)

```bash
npm run deploy:base
```

---

## Option 2: Deploy with Remix IDE

If you prefer using Remix IDE (web-based):

### Steps:

#### 1. Go to Remix
- Visit: https://remix.ethereum.org

#### 2. Create New File
- Click "File Explorer" (left sidebar)
- Click the "+" icon
- Name it: `CatchGameLeaderboard.sol`

#### 3. Copy Your Contract
- Open `contracts/CatchGameLeaderboard.sol` from your project
- Copy the entire file content
- Paste it into Remix

#### 4. Compile
- Click "Solidity Compiler" (left sidebar)
- Select compiler version: `0.8.24`
- Click "Compile CatchGameLeaderboard.sol"

#### 5. Deploy
- Click "Deploy & Run Transactions" (left sidebar)
- **Environment**: Select "Injected Provider - MetaMask"
- Make sure MetaMask is connected to **Base Sepolia** network
- Click "Deploy"
- Confirm transaction in MetaMask

#### 6. Get Contract Address
- After deployment, you'll see the contract in "Deployed Contracts" section
- The address is shown next to the contract name
- Copy it!

#### 7. Add to .env
Update your `.env` file with the contract address.

---

## Which Should You Use?

### Use Hardhat (Option 1) if:
- ✅ You want to use the setup we already created
- ✅ You want to verify contracts easily
- ✅ You want to automate deployments
- ✅ You're comfortable with command line

### Use Remix (Option 2) if:
- ✅ You prefer a visual interface
- ✅ You want to test contracts interactively
- ✅ You don't want to use command line
- ✅ You want to see contract functions in a UI

---

## Recommended: Start with Hardhat

Since we've already set everything up, I recommend using **Hardhat**:

1. **Get testnet ETH** from faucet
2. **Run**: `npm run deploy:baseSepolia`
3. **Copy the contract address** from output
4. **Add it to `.env`** file

That's it! 🎉

---

## Troubleshooting

### "Insufficient funds" error
- You need ETH for gas fees
- Get testnet ETH from faucet first

### "Private key not found" error
- Check your `.env` file exists
- Verify `PRIVATE_KEY=` is set correctly
- Make sure file is in project root

### "Network not found" error
- Make sure you're using the correct network name
- Check your Hardhat config has the network configured

---

## Need Help?

If you get stuck:
1. Check the error message
2. Verify your `.env` file is correct
3. Make sure you have ETH in your wallet
4. Try the Remix option if Hardhat doesn't work

