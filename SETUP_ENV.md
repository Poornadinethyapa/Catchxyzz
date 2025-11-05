# 🔐 Setting Up Your .env File for Smart Contract Deployment

## Step 1: Create the .env File

1. **In your project root**, create a new file named `.env`
   - Make sure it's exactly `.env` (not `.env.txt` or anything else)
   - It should be in the same folder as `package.json`

2. **Copy the template** from below and paste it into your `.env` file

## Step 2: Get Your Private Key

⚠️ **SECURITY WARNING**: Your private key gives full access to your wallet. Never share it!

### Option A: From MetaMask

1. Open MetaMask browser extension
2. Click the three dots (⋮) → **Account Details**
3. Click **Show Private Key**
4. Enter your MetaMask password
5. Copy the private key (it starts with `0x`)
6. **Paste it into your `.env` file** (replace `your_private_key_here`)

### Option B: From Another Wallet

- **OKX Wallet**: Settings → Security & Privacy → Show Private Key
- **Coinbase Wallet**: Settings → Show Private Key
- Other wallets: Look for "Export Private Key" or "Show Private Key"

⚠️ **IMPORTANT**: 
- Use a wallet with **testnet funds only** for testing
- Never use your main wallet's private key
- Consider creating a separate wallet for development

## Step 3: Get Basescan API Key (Optional but Recommended)

This is used to verify your contract on Basescan after deployment.

1. **Go to Basescan**: https://basescan.org/myapikey
2. **Sign up** or **Log in** (it's free)
3. **Create a new API key**
4. **Copy the API key**
5. **Paste it into your `.env` file** (replace `your_api_key_here`)

If you don't have an API key, you can skip this - deployment will still work, but you won't be able to verify the contract automatically.

## Step 4: Your .env File Should Look Like This

```env
# Your private key (starts with 0x)
PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef

# Base Network RPC URLs (these are already correct)
BASE_MAINNET_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Basescan API key (optional, for contract verification)
BASESCAN_API_KEY=your_api_key_here

# Contract address (set this AFTER deployment)
VITE_CONTRACT_ADDRESS=
```

## Step 5: Verify Your .env File

✅ Make sure:
- File is named exactly `.env` (not `.env.txt`)
- File is in the project root (same folder as `package.json`)
- Private key starts with `0x`
- No extra spaces or quotes around values
- `.env` is in `.gitignore` (it should be automatically)

## Step 6: Test Your Setup

Try compiling the contracts:

```bash
npm run compile
```

If it works, you're ready to deploy! 🎉

## Next Steps

1. **Get Base Sepolia ETH** (for testnet deployment):
   - Go to: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet
   - Or: https://www.alchemy.com/faucets/base-sepolia
   - Request testnet ETH

2. **Deploy to Base Sepolia** (testnet):
   ```bash
   npm run deploy:baseSepolia
   ```

3. **Update contract address** in `client/src/lib/contract.ts`

4. **Deploy to Base Mainnet** (when ready):
   ```bash
   npm run deploy:base
   ```

## Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] Never commit `.env` to GitHub
- [ ] Using a separate wallet for development
- [ ] Private key is kept secure
- [ ] Only using testnet for initial testing

## Troubleshooting

### "Private key not found" error
- Make sure `.env` file exists in project root
- Check that `PRIVATE_KEY=` is set correctly
- Verify there are no spaces around the `=` sign

### "Invalid private key" error
- Make sure private key starts with `0x`
- Check that it's 66 characters long (64 hex chars + `0x`)
- No extra spaces or newlines

### "Insufficient funds" error
- You need ETH on Base network for gas fees
- Get testnet ETH from a faucet first
- For mainnet, you need real ETH

## Need Help?

If you're stuck:
1. Check that your `.env` file is in the correct location
2. Verify the private key format
3. Make sure you have ETH in your wallet
4. Check the error message for specific issues

