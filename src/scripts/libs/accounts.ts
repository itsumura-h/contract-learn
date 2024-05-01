import {createWalletClient, http} from "viem"
import {privateKeyToAccount} from "viem/accounts"
import {localhost} from "viem/chains"

export const minter = createWalletClient({
  account: privateKeyToAccount("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"),
  chain: localhost,
  transport: http()
})

export const alice = createWalletClient({
  account: privateKeyToAccount("0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"),
  chain: localhost,
  transport: http()
})

export const bob = createWalletClient({
  account: privateKeyToAccount("0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"),
  chain: localhost,
  transport: http()
})
