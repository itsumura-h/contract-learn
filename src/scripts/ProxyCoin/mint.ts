import { parseEther } from "viem";
import hre from "hardhat";

async function main() {
  // 実装をデプロイ
  const initialSupply = parseEther("1000000");
  const coin = await hre.viem.deployContract("FiatTokenV1", [initialSupply]);
  console.log("Contract deployed to:", coin.address);

  console.log(await coin.read.name())
  console.log(await coin.read.symbol())

  // プロキシをデプロイ
  const proxy = await hre.viem.deployContract("FiatTokenProxy", [coin.address])
  console.log(await proxy.read.name())
  console.log(await proxy.read.symbol())
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
