import hre from "hardhat";
import { upgrades } from "hardhat"
import { parseEther, getContract } from "viem";
import { client } from './clients'

async function main() {
  // anvilを起動 
  // https://viem.sh/docs/clients/test.html
  // 実装をデプロイ
  const coinImpl = await hre.viem.deployContract("FiatTokenV1");
  console.log("Contract deployed to:", coinImpl.address);
  coinImpl.write.initialize();
  console.log("name:", await coinImpl.read.name())
  console.log("symbol:", await coinImpl.read.symbol())

  // プロキシをデプロイ
  const proxy = await hre.viem.deployContract("FiatTokenProxy", [coinImpl.address]);
  console.log("Proxy deployed to:", proxy.address);

  const fiatToken = getContract({
    address: proxy.address,
    abi: coinImpl.abi,
    client: client
  })

  console.log({fiatToken})

  // プロキシ経由で実装の関数を呼ぶ
  console.log(await fiatToken.read.name())
  console.log(await fiatToken.read.symbol())
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
