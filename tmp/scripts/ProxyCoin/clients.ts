import { createTestClient, http, publicActions } from "viem";
import { anvil } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

export const client = createTestClient({
  chain: anvil,
  mode: "anvil",
  transport: http(),
  account: privateKeyToAccount("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")
})
