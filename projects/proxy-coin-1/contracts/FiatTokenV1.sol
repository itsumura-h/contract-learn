// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract FiatTokenV1 is ERC20Upgradeable{
  function initialize() public initializer {
    __ERC20_init("FiatToken", "FT"); // name, symbol
  }
}