`@openzeppelin/hardhat-upgrades`を使う方法

`@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol`を継承したトークンを作る

[Github openzeppelin-upgrades](https://github.com/OpenZeppelin/openzeppelin-upgrades)

[【保存版】更新可能なコントラクトを作ってみよう（なぜ可能かも理解しましょう）](https://note.com/standenglish/n/n8728b074efd1)

---

- EIP2612(ERC20Permit)を継承した実装コントラクトを作る
- ERC1967Upgradeを継承したプロキシコントラクトを作る
  - プロキシはこれを丸パクる
  - https://polygonscan.com/address/0x431d5dff03120afa4bdf332c61a6e1766ef37bdb#code#F1#L15
- プロキシを介して実装コントラクトのinitialize関数を叩く
- V2実装コントラクトを作る
- プロキシのupdrage関数にV2実装コントラクトアドレスをセットする
- プロキシを介して実装コントラクトV2のinializeV2関数を叩く

JPYC Proxy  
https://polygonscan.com/token/0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB  

JPYC Implements  
https://polygonscan.com/address/0xf2fab05f26dc8da5a3f24d015fb043db7a8751cf#code  
