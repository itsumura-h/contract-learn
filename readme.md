[環境構築](./documents/環境構築.md)

[開発手順](./documents/開発手順.md)


## ツール

## hardhat
デプロイスクリプトの実行

```ts
pnpm hardhat run scripts/ProxyCoin/mint.ts
```

### tsx
TSファイルをそのまま実行するもの。内部がesbuildなのでts-nodeよりも速い。

```sh
pnpm tsx script.ts
```

https://qiita.com/ssssota/items/115a906e960bcfabb46b
