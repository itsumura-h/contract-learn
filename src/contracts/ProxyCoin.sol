// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "forge-std/console.sol";

contract ProxyCoin is ERC20 {
  constructor(uint256 initialSupply) ERC20("ProxyCoin", "PxCoin") payable {
    _mint(msg.sender, initialSupply);
  }
}
