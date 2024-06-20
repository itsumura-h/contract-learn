// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FiatTokenV1 is ERC20Upgradeable, UUPSUpgradeable, Ownable {
    constructor(uint256 initialSupply) ERC20("JPYC_v1", "JPYC") { // name, symbol
        _mint(msg.sender, initialSupply);
    }
}
