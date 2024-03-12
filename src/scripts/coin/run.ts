import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const initialSupply = parseEther("1000000");
  const coin = await hre.viem.deployContract("Coin", [initialSupply]);
  console.log(coin);
  console.log("Contract deployed to:", coin.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
