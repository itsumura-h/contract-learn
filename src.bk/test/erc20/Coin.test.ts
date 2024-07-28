import { assert } from "console";
import hre from "hardhat";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { localhost } from "viem/chains";

const totalSupply = 1000000n;

const deploy = async () => {
  const coin = await hre.viem.deployContract("Coin", [
    "Coin",
    "COIN",
    totalSupply,
  ]);
  return coin;
};

describe("Coin", () => {
  test("mint", async () => {
    const coin = await deploy();
    assert((await coin.read.name()) === "Coin");
    assert((await coin.read.symbol()) === "COIN");
    assert((await coin.read.totalSupply()) === totalSupply);
  });

  test("transfer", async () => {
    const coin = await deploy();

    const [minter, alice, bob] = await hre.viem.getWalletClients();

    await coin.write.transfer([alice.account.address, 1000n]);

    let aliceBalance = await coin.read.balanceOf([alice.account.address]);
    console.log("Alice balance:", (aliceBalance / BigInt(10 ** 18)).toString());

    // console.log("=== transfer");

    // await coin.write.approve([minter.account.address, 500n], {
    //   account: alice.account.address,
    // });
    // await coin.write.transferFrom([
    //   alice.account.address,
    //   bob.account.address,
    //   500n,
    // ]);
    // const bobBalance = await coin.read.balanceOf([bob.account.address]);
    // console.log("Bob balance:", (bobBalance / BigInt(10 ** 18)).toString());
    // aliceBalance = await coin.read.balanceOf([alice.account.address]);
    // console.log("Alice balance:", (aliceBalance / BigInt(10 ** 18)).toString());
  });
});
