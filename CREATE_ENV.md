# Create Your .env File

## Step 1: Create the File

Create a file named `.env` in your project root (same folder as `package.json`)

## Step 2: Add This Content

Copy and paste this into your `.env` file:

```env
PRIVATE_KEY=0x41cf4f43784805a4529884ca2c51901b76671836681975a407a49b0f68c2604e
BASE_MAINNET_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASESCAN_API_KEY=W3HRUIT9DTFEH6F4NQ9HDRD7M1KSNH3HBD
VITE_CONTRACT_ADDRESS=
```

## Important Notes

- Make sure the file is named exactly `.env` (not `.env.txt`)
- Make sure it's in the project root (same folder as `package.json`)
- No spaces around the `=` sign
- The `PRIVATE_KEY` already has the `0x` prefix

## After Creating the File

Run the deploy command again:

```bash
npm run deploy:baseSepolia
```

