// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "hardhat/console.sol";
import "forge-std/console.sol";

contract Coin is ERC20 {
  constructor(uint256 initialSupply) ERC20("Coin", "COIN") payable {
    console.log("initialSupply: ", initialSupply);
    console.log("msg.sender: ",msg.sender);
    console.log("gasleft(): ", gasleft());
    _mint(msg.sender, initialSupply);
  }
}
