import hre from "hardhat"
import { parseEther } from "viem";


async function main(){
  const initialSupply = parseEther("1000000");
  const coin = await hre.viem.deployContract("Coin", ["Coin", "COIN", initialSupply]);
  console.log(await coin.read.name())
  console.log(await coin.read.symbol())
  console.log(await coin.read.totalSupply())

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
