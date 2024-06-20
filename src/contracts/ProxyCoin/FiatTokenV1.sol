// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract FiatTokenV1 is ERC20, UUPSUpgradeable, Ownable, Initializable {
    constructor(uint256 initialSupply) ERC20("JPYC_v1", "JPYC") { // name, symbol
        _mint(msg.sender, initialSupply);
    }
}
