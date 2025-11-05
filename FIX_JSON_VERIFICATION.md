# 🔧 Fix Standard JSON Input Verification

## The Problem:

1. **"Unknown key '_format'"** warning - Basescan doesn't recognize Hardhat's `_format` field
2. **"Optimization Enabled: False"** - But it should be True
3. The JSON file needs to be cleaned up

## Solution: Extract Only the Input Section

The JSON file from Hardhat includes extra metadata. Basescan only needs the `input` section.

### Steps:

1. **Open the JSON file:**
   - File: `artifacts/build-info/7dac194460837c9ebcef159c0284837a.json`
   - It's a very large file (one line)

2. **Extract the `input` section:**
   - The JSON has this structure:
   ```json
   {
     "id": "...",
     "_format": "hh-sol-build-info-1",  // ← Basescan doesn't like this
     "solcVersion": "...",
     "solcLongVersion": "...",
     "input": { ... }  // ← This is what Basescan needs
   }
   ```

3. **Create a cleaned JSON:**
   - Copy only the `input` object
   - Remove the `_format` key
   - Keep only the `input` section

---

## Alternative: Use Hardhat's Automatic Verification

Since manual verification is having issues, let's try Hardhat's built-in verification with the correct settings:

```bash
npx hardhat verify --network baseSepolia 0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

If that doesn't work, try with explicit compiler settings:

```bash
npx hardhat verify --network baseSepolia --compiler-version v0.8.24+commit.e11b9ed9 0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c
```

---

## Best Solution: Use Single File Method with Exact Settings

Since the JSON method is having issues, go back to "Single file" but make sure settings match EXACTLY:

1. **Compiler Type:** "Solidity (Single file)"
2. **Compiler Version:** `v0.8.24+commit.e11b9ed9` (exact match)
3. **License:** "MIT License (MIT)"
4. **Optimization:** 
   - ✅ **Enabled: YES** (make sure this is checked!)
   - **Runs:** `200`
5. **Source Code:** Copy entire `CatchGameLeaderboard.sol` file
6. **Constructor Arguments:** Leave empty

**Important:** Make sure "Optimization Enabled" is set to **YES**, not NO!

---

## Quick Fix Script

If you want to extract just the `input` section from the JSON:

1. Open the JSON file in a text editor
2. Find the `"input":` section
3. Copy everything from `{` after `"input":` to the matching closing `}`
4. Paste just that into Basescan's Standard JSON Input field

---

## Recommendation

Try the **Single file method again** but this time:
- Make sure "Optimization Enabled" is **YES** (not NO!)
- Use exact compiler version: `v0.8.24+commit.e11b9ed9`

The error shows "Optimization Enabled: False" but it should be True!

