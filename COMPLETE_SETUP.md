# ✅ Complete Setup Steps 3 & 4

## Step 3: Update client/src/lib/contract.ts with Contract Address

Your contract address is: **`0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c`**

### What I Did:

I've already updated `client/src/lib/contract.ts` with your contract address. The file now has:

```typescript
export const CONTRACT_ADDRESS = process.env.VITE_CONTRACT_ADDRESS || '0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c';
```

### Also Update Your .env File:

Add this line to your `.env` file:

```env
VITE_CONTRACT_ADDRESS=0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

Your complete `.env` file should now look like:

```env
PRIVATE_KEY=0x41cf4f43784805a4529884ca2c51901b76671836681975a407a49b0f68c2604e
BASE_MAINNET_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASESCAN_API_KEY=W3HRUIT9DTFEH6F4NQ9HDRD7M1KSNH3HBD
VITE_CONTRACT_ADDRESS=0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

---

## Step 4: Verify Contract on Basescan

### Option A: Manual Verification (Easier)

1. **Go to Basescan Sepolia:**
   - Visit: https://sepolia.basescan.org/address/0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c

2. **Click "Contract" tab**

3. **Click "Verify and Publish"**

4. **Fill in the form:**
   - **Compiler Version:** `0.8.24`
   - **License:** `MIT`
   - **Optimization:** `Yes` (200 runs)
   - **Source Code:** Copy your contract code from `contracts/CatchGameLeaderboard.sol`

5. **Click "Verify and Publish"**

6. **Done!** Your contract will be verified.

### Option B: Automatic Verification (If API works)

The automatic verification might have issues with the API. You can try:

```bash
npx hardhat verify --network baseSepolia 0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

But if it gives errors, use **Option A** (manual verification) instead.

---

## ✅ What's Done:

- ✅ Step 3: Contract address updated in `client/src/lib/contract.ts`
- ⏳ Step 4: Verify contract on Basescan (use manual method above)

---

## Test Your Contract

After completing steps 3 & 4:

1. **Rebuild your frontend:**
   ```bash
   npm run build
   ```

2. **Test the game:**
   - Connect your wallet
   - Play the game
   - Submit a score - it should be saved on-chain!

3. **Check the leaderboard:**
   - Scores should appear on-chain
   - View on Basescan to see transactions

---

## View Your Contract on Basescan

**Base Sepolia Testnet:**
https://sepolia.basescan.org/address/0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c

**After verification, you can:**
- View the contract source code
- See all transactions
- Interact with the contract
- View the leaderboard on-chain!

