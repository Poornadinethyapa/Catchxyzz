# 🔧 Fix Bytecode Mismatch Error

## What's the Error?

**"Unable to find matching Contract Bytecode and ABI"**

This means the bytecode that was deployed doesn't match what Basescan expects from your source code.

## Common Causes:

1. **Compiler version mismatch** - Different Solidity version or commit
2. **Optimization settings mismatch** - Different optimization settings
3. **Source code differences** - Code doesn't match what was compiled
4. **Constructor arguments** - Missing or incorrect constructor arguments

## Solution 1: Use Standard JSON Input (Recommended)

Instead of "Single file", use **"Solidity (Standard JSON Input)"** which is more accurate:

### Steps:

1. **Get the compilation JSON:**
   ```bash
   npx hardhat compile --force
   ```

2. **Find the JSON file:**
   - Go to: `artifacts/build-info/`
   - Find the JSON file (looks like: `7dac194460837c9ebcef159c0284837a.json`)

3. **On Basescan:**
   - Select **"Solidity (Standard JSON Input)"** as Compiler Type
   - Copy the ENTIRE content of that JSON file
   - Paste it into the "Standard JSON Input" field

4. **Select Contract Name:**
   - Select: `CatchGameLeaderboard` from the dropdown

5. **Click "Verify and Publish"**

---

## Solution 2: Use Hardhat Automatic Verification

Try the automatic verification with the correct settings:

```bash
npx hardhat verify --network baseSepolia 0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

If it still fails, try specifying the exact compiler version:

```bash
npx hardhat verify --network baseSepolia --compiler-version v0.8.24+commit.e11b9ed9 0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

---

## Solution 3: Double-Check Manual Verification Settings

If using "Single file" method, make sure:

1. **Compiler Version:** Exactly `v0.8.24+commit.e11b9ed9` (match the exact commit)
   - If you don't see this exact version, try the closest one
   - Or try `v0.8.24` without the commit hash

2. **Optimization:** 
   - ✅ Enabled: **Yes**
   - Runs: **200**

3. **Source Code:**
   - Copy the ENTIRE file from `contracts/CatchGameLeaderboard.sol`
   - Make sure you include the first line: `// SPDX-License-Identifier: MIT`
   - Make sure you copy ALL lines (141 lines total)

4. **License:** MIT License (MIT)

5. **Constructor Arguments:** Leave empty (your contract has no constructor args)

---

## Solution 4: Recompile and Redeploy

If nothing works, you might need to recompile with the exact settings:

1. **Clean and recompile:**
   ```bash
   npx hardhat clean
   npx hardhat compile
   ```

2. **Redeploy** (if needed):
   ```bash
   npm run deploy:baseSepolia
   ```

3. **Then verify** using the new deployment

---

## Quick Fix: Try Different Compiler Versions

Sometimes the exact commit version matters. Try:

1. **First try:** `v0.8.24` (without commit hash)
2. **If that fails:** Try `v0.8.24+commit.e11b9ed9` (exact from error)
3. **If still fails:** Try `v0.8.25` or `v0.8.23` (close versions)

---

## Recommended: Use Standard JSON Input

The **easiest and most accurate** method is:

1. Select **"Solidity (Standard JSON Input)"** on Basescan
2. Copy the entire JSON file from `artifacts/build-info/`
3. Paste it into the form
4. Select contract name: `CatchGameLeaderboard`
5. Verify!

This method uses the EXACT compilation settings that were used during deployment.

