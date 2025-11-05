# 📍 How to Get Your Contract Address

## Step 1: Deploy the Contract

The contract address will be **generated when you deploy** the contract. Here's how:

### Option A: Deploy to Base Sepolia (Testnet - Recommended First)

1. **Make sure you have testnet ETH:**
   - Get Base Sepolia ETH from a faucet:
     - https://www.coinbase.com/faucets/base-ethereum-goerli-faucet
     - https://www.alchemy.com/faucets/base-sepolia

2. **Deploy to testnet:**
   ```bash
   npm run deploy:baseSepolia
   ```

3. **Look for the output:**
   ```
   Deploying CatchGameLeaderboard contract...
   CatchGameLeaderboard deployed to: 0x1234567890abcdef1234567890abcdef12345678
   ```
   
   **This is your contract address!** Copy it.

### Option B: Deploy to Base Mainnet

1. **Make sure you have ETH on Base mainnet**

2. **Deploy to mainnet:**
   ```bash
   npm run deploy:base
   ```

3. **Copy the contract address from the output**

---

## Step 2: Add Contract Address to .env

After deployment, you'll see output like this:

```
CatchGameLeaderboard deployed to: 0x1234567890abcdef1234567890abcdef12345678
```

1. **Copy that address** (the long hex string starting with `0x`)

2. **Add it to your `.env` file:**
   ```env
   PRIVATE_KEY=0x41cf4f43784805a4529884ca2c51901b76671836681975a407a49b0f68c2604e
   BASE_MAINNET_RPC_URL=https://mainnet.base.org
   BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
   BASESCAN_API_KEY=W3HRUIT9DTFEH6F4NQ9HDRD7M1KSNH3HBD
   VITE_CONTRACT_ADDRESS=0x1234567890abcdef1234567890abcdef12345678
   ```

   Replace `0x1234567890abcdef1234567890abcdef12345678` with your actual contract address.

---

## Step 3: Rebuild Frontend (Optional)

If you want to use the environment variable approach, rebuild:

```bash
npm run build
```

Or, you can directly update the contract file (see Step 4).

---

## Step 4: Update Frontend Code (Alternative)

You can also directly update `client/src/lib/contract.ts`:

1. **Open** `client/src/lib/contract.ts`

2. **Find this line:**
   ```typescript
   export const CONTRACT_ADDRESS = process.env.VITE_CONTRACT_ADDRESS || '';
   ```

3. **Replace it with your contract address:**
   ```typescript
   export const CONTRACT_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';
   ```
   
   (Replace with your actual contract address)

---

## Step 5: Verify Contract (Optional but Recommended)

After deployment, verify your contract on Basescan:

```bash
npx hardhat verify --network baseSepolia 0xYOUR_CONTRACT_ADDRESS
```

Or for mainnet:
```bash
npx hardhat verify --network base 0xYOUR_CONTRACT_ADDRESS
```

---

## Example Deployment Output

When you run `npm run deploy:baseSepolia`, you'll see something like:

```
Compiling 1 file with 0.8.24
Compiled 1 Solidity file successfully
Deploying CatchGameLeaderboard contract...
CatchGameLeaderboard deployed to: 0x8e1D6E6cC15F6c508c0B918B376A6B9Caed4AdE8

Next steps:
1. Copy the contract address above
2. Update your frontend with the contract address
3. Verify the contract on Basescan:
   npx hardhat verify --network base 0x8e1D6E6cC15F6c508c0B918B376A6B9Caed4AdE8
```

**The contract address is:** `0x8e1D6E6cC15F6c508c0B918B376A6B9Caed4AdE8` (example)

---

## Quick Checklist

- [ ] Deploy contract to testnet or mainnet
- [ ] Copy the contract address from the output
- [ ] Add `VITE_CONTRACT_ADDRESS=0x...` to `.env` file
- [ ] (Optional) Update `client/src/lib/contract.ts` directly
- [ ] Test the frontend - it should now connect to your contract!

---

## Need Help?

If deployment fails:
- Check you have ETH in your wallet (for gas fees)
- Verify your `.env` file has the correct `PRIVATE_KEY`
- Make sure you're on the correct network
- Check the error message for specific issues

