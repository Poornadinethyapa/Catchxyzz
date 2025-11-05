const hre = require("hardhat");

async function main() {
  console.log("Deploying CatchGameLeaderboard contract...");

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);
  console.log("Account balance:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

  const CatchGameLeaderboard = await hre.ethers.getContractFactory("CatchGameLeaderboard");
  const leaderboard = await CatchGameLeaderboard.deploy();

  await leaderboard.waitForDeployment();

  const address = await leaderboard.getAddress();
  console.log("CatchGameLeaderboard deployed to:", address);
  console.log("\nNext steps:");
  console.log("1. Copy the contract address above");
  console.log("2. Update your .env file with: VITE_CONTRACT_ADDRESS=" + address);
  console.log("3. Update client/src/lib/contract.ts with the contract address");
  console.log("4. Verify the contract on Basescan:");
  console.log(`   npx hardhat verify --network baseSepolia ${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

