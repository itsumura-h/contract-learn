import hre from "hardhat"
import {ethers, upgrades} from "hardhat"

async function main() {
  const FiatTokenFactory = await ethers.getContractFactory("FiatTokenV1")
  const FiatTokenV1 = await upgrades.deployProxy(FiatTokenFactory)
  await FiatTokenV1.waitForDeployment()
  const FiatTokenProxyAddress = await FiatTokenV1.getAddress()
  console.log(FiatTokenProxyAddress)

  // upgrade
  const FiatTokenV1_1Factory = await ethers.getContractFactory("FiatTokenV1_1")
  const FiatTokenV1_1 = await upgrades.upgradeProxy(FiatTokenProxyAddress, FiatTokenV1_1Factory)
  const FiatTokenV1_1Address = await FiatTokenV1_1.getAddress()
  console.log(FiatTokenProxyAddress == FiatTokenV1_1Address)
}

main().catch(error=>{
  console.error(error)
  process.exitCode = 1
})