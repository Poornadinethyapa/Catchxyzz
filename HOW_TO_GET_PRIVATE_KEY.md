# 🔑 How to Get Your Private Key from MetaMask

## ⚠️ SECURITY WARNING

- **NEVER share your private key with anyone**
- **NEVER commit it to GitHub**
- **Use a separate wallet for development** if possible
- Your private key gives **full access** to your wallet

## Step-by-Step Guide

### 1. Open MetaMask

- Click the MetaMask extension icon in your browser
- Make sure you're logged in

### 2. Access Account Details

- Click the **three dots (⋮)** next to your account name
- Or click the **account icon** at the top right
- Select **"Account Details"** or **"Account Information"**

### 3. Show Private Key

- Click **"Show Private Key"** or **"Export Private Key"**
- Enter your **MetaMask password**
- Click **"Confirm"** or **"Show"**

### 4. Copy the Private Key

- The private key will be displayed
- It should be **66 characters long** (64 hex + `0x`)
- Example: `0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`
- **Copy it** (click the copy button or Ctrl+C)

### 5. Paste into .env File

- Open your `.env` file
- Paste it after `PRIVATE_KEY=`
- Example: `PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`

## What It Should Look Like

✅ **Correct Private Key Format:**
```
PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
```
- 66 characters total
- Starts with `0x`
- 64 hexadecimal characters after `0x`

❌ **Wrong (This is an address, not a private key):**
```
PRIVATE_KEY=0x8e1D6E6cC15F6c508c0B918B376A6B9Caed4AdE8
```
- Only 42 characters
- This is your wallet address, not your private key!

## Alternative: Create a New Wallet for Development

If you don't want to use your main wallet:

1. **Create a new MetaMask account**:
   - Click account icon → "Create Account"
   - Name it "Development" or "Testnet"

2. **Fund it with testnet ETH**:
   - Use a faucet to get Base Sepolia testnet ETH
   - This is free testnet ETH, not real money

3. **Use this wallet's private key**:
   - Follow the steps above to get the private key
   - This keeps your main wallet safe

## Security Checklist

- [ ] Using a separate wallet for development
- [ ] Private key is 66 characters long
- [ ] `.env` file is in `.gitignore`
- [ ] Never committing `.env` to GitHub
- [ ] Only using testnet for now

## Troubleshooting

### "I can't find Show Private Key"
- Try: Account Details → Export Private Key
- Or: Settings → Security & Privacy → Show Private Key

### "I'm asked for a password"
- This is your MetaMask password (the one you use to unlock MetaMask)
- Not your wallet recovery phrase

### "The private key looks wrong"
- Make sure it's 66 characters
- Should start with `0x`
- Should be all lowercase or mixed case (both are valid)

## Need Help?

If you're still having trouble:
1. Make sure you're using the correct MetaMask account
2. Check that you entered the correct password
3. Verify the private key is 66 characters long

