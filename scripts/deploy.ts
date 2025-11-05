import { ethers } from "hardhat";

async function main() {
  console.log("Deploying CatchGameLeaderboard contract...");

  const CatchGameLeaderboard = await ethers.getContractFactory("CatchGameLeaderboard");
  const leaderboard = await CatchGameLeaderboard.deploy();

  await leaderboard.waitForDeployment();

  const address = await leaderboard.getAddress();
  console.log("CatchGameLeaderboard deployed to:", address);
  console.log("\nNext steps:");
  console.log("1. Copy the contract address above");
  console.log("2. Update your frontend with the contract address");
  console.log("3. Verify the contract on Basescan:");
  console.log(`   npx hardhat verify --network base ${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

