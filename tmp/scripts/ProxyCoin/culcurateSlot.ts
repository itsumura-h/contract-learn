import {toBigInt, keccak256, toUtf8Bytes, toBeHex} from "ethers"

async function main() {
  // 'eip1967.proxy.implementation' の Keccak256 ハッシュを計算
  const hash = keccak256(toUtf8Bytes('eip1967.proxy.implementation'));

  // bytes32 の値として hash を取得
  const bytes32Value = toBigInt(hash);

  // -1 を引く
  const result = bytes32Value - toBigInt(1);

  console.log(`Hash: ${hash}`);
  console.log(`Result: ${toBeHex(result)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
