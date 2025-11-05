# 🚀 Deployment Guide for Farcaster Mini App

This guide will help you deploy your Catchxyz mini app to Farcaster.

## Prerequisites

1. A hosted manifest URL from Farcaster (you already have this from the dashboard)
2. A production domain where your app will be hosted
3. Access to your deployment platform (Vercel, Railway, Render, etc.)

## Step 1: Deploy Your App

### Option A: Deploy to Vercel (Recommended for Frontend)

1. **Connect your GitHub repo to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect the build settings from `vercel.json`

2. **Configure Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add: `FARCASTER_HOSTED_MANIFEST_URL` = `https://api.farcaster.xyz/miniapps/hosted-manifest/YOUR-MANIFEST-ID`
   - Replace `YOUR-MANIFEST-ID` with your actual hosted manifest ID

3. **Deploy:**
   - Vercel will automatically deploy on push to main
   - Or click "Deploy" in the Vercel dashboard

### Option B: Deploy Full-Stack App (Railway, Render, Fly.io)

If you need to run the Express server:

1. **Set environment variables:**
   ```bash
   FARCASTER_HOSTED_MANIFEST_URL=https://api.farcaster.xyz/miniapps/hosted-manifest/YOUR-MANIFEST-ID
   PORT=5000
   NODE_ENV=production
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm run start
   ```

## Step 2: Update Manifest with Your Domain

Once deployed, update `client/public/.well-known/farcaster.json`:

1. **Get your production domain** (e.g., `catchxyz.vercel.app` or your custom domain)

2. **Update the manifest:**
   ```json
   {
     "miniapp": {
       "homeUrl": "https://your-actual-domain.com",
       "canonicalDomain": "your-actual-domain.com",
       "iconUrl": "https://your-actual-domain.com/favicon.png",
       ...
     }
   }
   ```

3. **Commit and push:**
   ```bash
   git add client/public/.well-known/farcaster.json
   git commit -m "chore: update manifest with production domain"
   git push
   ```

## Step 3: Configure Redirect (Temporary for Verification)

The app is already configured to redirect `/.well-known/farcaster.json` to your hosted manifest URL when `FARCASTER_HOSTED_MANIFEST_URL` is set.

**For Vercel:**
- Set the environment variable `FARCASTER_HOSTED_MANIFEST_URL` in Vercel dashboard
- Redeploy

**For other platforms:**
- Set the environment variable in your platform's settings
- Redeploy

## Step 4: Verify Manifest

1. **Test the redirect:**
   - Visit: `https://your-domain.com/.well-known/farcaster.json`
   - It should redirect (307) to your hosted manifest URL

2. **Complete verification in Farcaster dashboard:**
   - Go back to the "Manage Manifest" page
   - Click "Verify" or follow the verification steps
   - The system will check that your domain redirects correctly

## Step 5: After Verification

Once verified and you have the `accountAssociation` credentials:

1. **Update the manifest** with the signed credentials:
   ```json
   {
     "accountAssociation": {
       "header": "your-generated-header",
       "payload": "your-generated-payload",
       "signature": "your-generated-signature"
     },
     ...
   }
   ```

2. **Remove the redirect** (optional but recommended):
   - Remove the `FARCASTER_HOSTED_MANIFEST_URL` environment variable
   - Or update the server code to not redirect when manifest is signed
   - This allows clients to fetch your manifest directly

3. **Commit and redeploy:**
   ```bash
   git add client/public/.well-known/farcaster.json
   git commit -m "chore: add signed manifest credentials"
   git push
   ```

## Step 6: Launch on Farcaster

1. Your app should now be verified and ready
2. Submit it for review/launch in the Farcaster dashboard
3. Once approved, users can discover and use your mini app!

## Troubleshooting

### Redirect not working?
- Check that `FARCASTER_HOSTED_MANIFEST_URL` is set correctly
- Verify the environment variable is available at runtime
- Check server logs for errors

### Manifest not accessible?
- Ensure `/.well-known/farcaster.json` is publicly accessible
- Check CORS settings if needed
- Verify the file exists in `client/public/.well-known/`

### Verification failing?
- Make sure the redirect returns a 307 status code
- Verify the hosted manifest URL is correct
- Check that your domain matches what's in the manifest

## Current Status

✅ Farcaster SDK installed and initialized  
✅ Manifest file created at `client/public/.well-known/farcaster.json`  
✅ Server redirect configured for hosted manifest  
⏳ **Next:** Deploy and configure environment variable  
⏳ **Then:** Update manifest with production domain  
⏳ **Finally:** Complete verification and launch!

