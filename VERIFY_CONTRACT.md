# 📋 How to Fill Out the Basescan Verification Form

## Form Fields Explained:

### 1. **Contract Address** ✅
Already filled: `0x26dAE973651Edc4A2A1d1e6843B5Ba64f599ac4c`

### 2. **Compiler Type** ⚠️ (Required)
Select: **"Solidity (Single file)"**

**What is Compiler Type?**
- This tells Basescan how you're providing your contract code
- **"Solidity (Single file)"** = You'll paste the entire contract code in one text box (EASIEST)
- **"Solidity (Standard JSON Input)"** = More complex, used for multiple files or imports

**For your contract:** Choose **"Solidity (Single file)"** because your contract is in one file.

### 3. **Compiler Version** ⚠️ (Required)
Select: **"v0.8.24"** (or the closest version like `v0.8.24+commit.e01b3272`)

**Where to find this:**
- Your contract uses: `pragma solidity ^0.8.24;`
- Look for versions starting with `0.8.24`
- If you see multiple, choose the one without "-nightly" or experimental

### 4. **Open Source License Type** ⚠️ (Required)
Select: **"MIT License (MIT)"**

**Why?**
- Your contract file has: `// SPDX-License-Identifier: MIT`
- This matches your contract's license

### 5. **Optimization** 
Check: **"Yes"**

**Optimization Settings:**
- **Optimization Enabled:** Yes
- **Runs:** `200`

**Why?**
- Your Hardhat config has: `optimizer: { enabled: true, runs: 200 }`
- This matches how you compiled the contract

### 6. **Source Code**
Copy and paste your ENTIRE contract code from:
`contracts/CatchGameLeaderboard.sol`

**How to get it:**
1. Open `contracts/CatchGameLeaderboard.sol` in your editor
2. Select all (Ctrl+A)
3. Copy (Ctrl+C)
4. Paste into the "Source Code" text box

### 7. **Constructor Arguments** (Leave Empty)
Your contract doesn't have constructor arguments, so leave this empty.

### 8. **Terms of Service**
Check the box: **"I agree to the terms of service"**

---

## Quick Checklist:

- [ ] **Compiler Type:** "Solidity (Single file)"
- [ ] **Compiler Version:** "v0.8.24" (or closest match)
- [ ] **License:** "MIT License (MIT)"
- [ ] **Optimization:** Yes, Runs: 200
- [ ] **Source Code:** Paste entire `CatchGameLeaderboard.sol` file
- [ ] **Constructor Arguments:** Leave empty
- [ ] **Terms:** Check the box

---

## Step-by-Step:

1. **Select Compiler Type:** "Solidity (Single file)"
2. **Select Compiler Version:** Look for `0.8.24` (pick the latest stable version)
3. **Select License:** "MIT License (MIT)"
4. **Check Optimization:** Yes, set Runs to `200`
5. **Open your contract file:** `contracts/CatchGameLeaderboard.sol`
6. **Copy all the code** (Ctrl+A, Ctrl+C)
7. **Paste into Source Code field**
8. **Leave Constructor Arguments empty**
9. **Check "I agree to terms"**
10. **Click "Verify and Publish"**

---

## If You Get Errors:

- **"Compiler version mismatch"**: Make sure you select the exact version (0.8.24)
- **"Optimization mismatch"**: Make sure Optimization is enabled with 200 runs
- **"License mismatch"**: Make sure you select MIT License
- **"Source code mismatch"**: Make sure you copied the ENTIRE file, including the first line with `// SPDX-License-Identifier: MIT`

---

## After Verification:

Once verified, you'll be able to:
- View the contract source code on Basescan
- Interact with the contract functions
- See all transactions and events
- View the on-chain leaderboard!

