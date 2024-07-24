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

    const minter = createWalletClient({
      account: privateKeyToAccount(
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
      ),
      chain: localhost,
      transport: http(),
    });

    const alice = createWalletClient({
      account: privateKeyToAccount(
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
      ),
      chain: localhost,
      transport: http(),
    });

    const bob = createWalletClient({
      account: privateKeyToAccount(
        "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
      ),
      chain: localhost,
      transport: http(),
    });

    const balance = await coin.read.balanceOf([minter.account.address]);
    console.log("Minter balance:", (balance / BigInt(10 ** 18)).toString());

    await coin.write.transfer([alice.account.address, 1000n]);
    let aliceBalance = await coin.read.balanceOf([alice.account.address]);
    console.log("Alice balance:", (aliceBalance / BigInt(10 ** 18)).toString());

    console.log("=== transfer");

    await coin.write.approve([minter.account.address, 500n], {
      account: alice.account.address,
    });
    await coin.write.transferFrom([
      alice.account.address,
      bob.account.address,
      500n,
    ]);
    const bobBalance = await coin.read.balanceOf([bob.account.address]);
    console.log("Bob balance:", (bobBalance / BigInt(10 ** 18)).toString());
    aliceBalance = await coin.read.balanceOf([alice.account.address]);
    console.log("Alice balance:", (aliceBalance / BigInt(10 ** 18)).toString());
  });
});
