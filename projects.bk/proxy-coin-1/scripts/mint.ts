import hre from "hardhat"
import FiatTokenV1Abi from "../artifacts/contracts/FiatTokenV1/FiatTokenV1.sol/FiatTokenV1.json"

async function main() {
  console.log("=== deploy")
  const [deployer] = await hre.viem.getWalletClients()
  // console.log({deployer})

  const fiatTokenV1Factory = await hre.viem.deployContract("FiatTokenV1")
  console.log({fiatTokenV1Factory})
  await fiatTokenV1Factory.read.proxiableUUID
  // await fiatTokenV1Factory.write.

  // const fiatTokenV1Factory = await deployer.deployContract("FiatTokenV1", [])
}

main().catch(error=>{
  console.error(error)
  process.exitCode = 1
})
