# ⚡ Quick Fix for Bytecode Mismatch

## The Problem:
The bytecode doesn't match because the compiler settings don't match exactly.

## ✅ Best Solution: Use Standard JSON Input

This is the **most accurate** method because it uses the EXACT compilation settings.

### Steps:

1. **On Basescan verification page:**
   - Change **Compiler Type** to: **"Solidity (Standard JSON Input)"**

2. **Get the JSON file:**
   - Open: `artifacts/build-info/7dac194460837c9ebcef159c0284837a.json`
   - Copy the **ENTIRE** file content (it's a large JSON file)
   - Paste it into the "Standard JSON Input" field on Basescan

3. **Select Contract:**
   - Select: **"CatchGameLeaderboard"** from the contract dropdown

4. **Click "Verify and Publish"**

---

## Alternative: Exact Version Match (Manual)

If you prefer to use "Single file" method:

1. **Compiler Type:** "Solidity (Single file)"
2. **Compiler Version:** Try to find **exactly** `v0.8.24+commit.e11b9ed9`
   - If you don't see this exact version, try just `v0.8.24`
   - Or try the closest match
3. **License:** "MIT License (MIT)"
4. **Optimization:** Yes, Runs: 200
5. **Source Code:** Copy entire `CatchGameLeaderboard.sol` file
6. **Constructor Arguments:** Leave empty

---

## Why Standard JSON Input is Better:

✅ Uses the EXACT compilation settings from Hardhat
✅ Includes all optimization settings automatically
✅ No need to match compiler versions manually
✅ More reliable verification

---

## If Still Having Issues:

Try recompiling with exact settings:

```bash
npx hardhat clean
npx hardhat compile
```

Then use the NEW JSON file from `artifacts/build-info/` for Standard JSON Input verification.

