プロキシーパターンによるUpgradable
===

## プロキシーパターンについて
プロキシーパターンを実現するには
- Transparent Proxy Pattern
- UUPS Proxy Pattern
- Diamond Pattern
の3つがある。

```
コントラクトがでかい->Diamond
ガス代を優先したい->UUPS
コントラクトのサイズを小さくしたい->Transparent
```

ではあるが、現在のOpenZeppelinの推奨はUUPS。なのでUUPSを使う。

---

[【完全保存版】アップグレーダブルコントラクトの作り方とその内容について](https://note.com/standenglish/n/ne6b09a489f5c)

## 環境構築
```sh
pnpm add -D @openzeppelin/contracts-upgradeable @openzeppelin/hardhat-upgrades
```

- @openzeppelin/contracts-upgradeable
  - UpgradableとProxyPatternをするためのコントラクト
- @openzeppelin/hardhat-upgrades
  - haedhatからupgradeableを使えるようにするためのもの

hardhat.config.tsに追記
```ts
import "@openzeppelin/hardhat-upgrades";
```

## 依存関係
### 実装
https://etherscan.io/address/0x43506849d7c04f9138d1a2050bbf3a0c054402dd#code


interface IERC20

↑

abstract AbstractFiatTokenV1

↑

FiatTokenV1

↑

FiatTokenV1_1

↑

FiatFokenV2

↑

FiatTokenV2_1

↑

FiatTokenV2_2

### Proxy
https://etherscan.io/token/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c#code

abstract Proxy

↑

UpgradeabilityProxy  
※Openzeppelinでは`ERC1967Proxy`にリネームされた  
https://docs.openzeppelin.com/contracts/5.x/api/proxy#ERC1967Proxy  

↑

AdminUpgradeabilityProxy

↑

FiatTokenProxy

## 手順
1. トークンの実装をFiatTokenとして作る
1. FiatTokenをデプロイする
1. プロキシを
