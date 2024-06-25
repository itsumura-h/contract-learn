// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FiatTokenV1} from "./FiatTokenV1.sol";

contract FiatTokenV1_1 is FiatTokenV1 {
  function initialize_1_1() external {
    __ERC20_init("FiatTokenV1.1", "FTv1.1"); // name, symbol
  }
}
