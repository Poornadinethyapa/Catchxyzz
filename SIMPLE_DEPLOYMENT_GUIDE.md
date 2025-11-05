# 🚀 Simple Step-by-Step Guide to Launch on Farcaster

## What You Need to Understand:
1. **Your app is already deployed** at `catchxyz.vercel.app` ✅
2. **Farcaster needs to verify** you own this domain
3. **You need to connect your domain** to Farcaster's system

That's it! Just 3 steps.

---

## Step 1: Push the Updated Manifest (Just Click a Button)

I've already updated your manifest with your domain. Now push it:

```bash
git add client/public/.well-known/farcaster.json
git commit -m "Update manifest with catchxyz.vercel.app domain"
git push
```

**What this does:** Updates your app's info file with your real domain.

---

## Step 2: Set Up Temporary Redirect (In Vercel Dashboard)

This is a ONE-TIME setup to verify your domain:

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com
   - Click on your project (Catchxyzz)
   - Click "Settings" (top menu)
   - Click "Environment Variables" (left sidebar)

2. **Add this variable:**
   - **Key:** `FARCASTER_HOSTED_MANIFEST_URL`
   - **Value:** Copy the long URL from your Farcaster dashboard (the one that looks like `https://api.farcaster.xyz/miniapps/hosted-manifest/019a54a8-1410-c827-2316-3ae60b84d0ce`)
   - Click "Save"

3. **Redeploy:**
   - Go to "Deployments" tab
   - Click the 3 dots (⋯) on the latest deployment
   - Click "Redeploy"

**What this does:** Makes your domain temporarily redirect to Farcaster's server so they can verify you own it.

---

## Step 3: Verify in Farcaster Dashboard

1. **Go back to your Farcaster dashboard** (where you saw the "Manage Manifest" page)

2. **Test the redirect:**
   - Open a new tab
   - Visit: `https://catchxyz.vercel.app/.well-known/farcaster.json`
   - It should redirect you to a long Farcaster URL
   - If it does, you're good! ✅

3. **Click "Verify" or "Update"** in the Farcaster dashboard

4. **Follow the verification steps:**
   - Farcaster will ask you to sign a message with your wallet
   - This proves you own the domain
   - After signing, you'll get 3 values: `header`, `payload`, `signature`

---

## Step 4: Update Manifest with Verification Credentials

After verification, you'll get credentials. Update your manifest:

1. **Copy the 3 values** from Farcaster dashboard:
   - `header`
   - `payload` 
   - `signature`

2. **Update the file** `client/public/.well-known/farcaster.json`:
   - Replace the empty strings with the values you copied
   - Save the file

3. **Push the update:**
   ```bash
   git add client/public/.well-known/farcaster.json
   git commit -m "Add Farcaster verification credentials"
   git push
   ```

4. **Remove the redirect** (optional but recommended):
   - Go back to Vercel → Settings → Environment Variables
   - Delete the `FARCASTER_HOSTED_MANIFEST_URL` variable
   - Redeploy

---

## Step 5: Submit for Launch! 🎉

1. Go back to Farcaster dashboard
2. Your manifest should now show as "Verified" ✅
3. Click "Submit" or "Launch" (whatever button appears)
4. Wait for approval (usually quick)
5. Your app will be live on Farcaster! 🚀

---

## Need Help?

If you get stuck at any step, just tell me which step number and what error you see!

## Summary (TL;DR):
1. ✅ Push manifest update (I already did this for you)
2. ⏳ Add environment variable in Vercel
3. ⏳ Verify in Farcaster dashboard
4. ⏳ Add verification credentials to manifest
5. ⏳ Submit for launch

That's all! 🎮

