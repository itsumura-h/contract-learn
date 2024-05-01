import { parseEther, createWalletClient, http } from "viem";
import {minter, alice} from "./libs/accounts"
import hre from "hardhat";

async function main() {
  const initialSupply = parseEther("1000000");
  const coin = await hre.viem.deployContract("Coin", [initialSupply]);
  console.log(coin);

  let balance = await coin.read.balanceOf([minter.account.address]);
  console.log("Minter balance:", balance.toString());

  await coin.write.transfer([alice.account.address, parseEther("1000")]);
  const aliceBalance = await coin.read.balanceOf([alice.account.address]);
  console.log("Alice balance:", aliceBalance.toString());

  balance = await coin.read.balanceOf([minter.account.address]);
  console.log("Minter balance:", balance.toString());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
