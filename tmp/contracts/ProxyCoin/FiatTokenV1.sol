// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

// contract FiatTokenV1 is ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
//   event MintEvent(address indexed to, uint256 indexed amount);

//   function initialize(address initialOwner) public initializer {
//     __ERC20_init("FiatTokenV1", "FT"); // name, symbol
//     __Ownable_init(initialOwner);
//     __UUPSUpgradeable_init();
//   }

//   function mint(address _to, uint256 _amount) public onlyOwner {
//     _mint(_to, _amount);
//     emit MintEvent(_to, _amount);
//   }

//   function _authorizeUpgrade(
//     address newImplementation
//   ) internal override onlyOwner {}
// }

contract FiatTokenV1 is ERC20Upgradeable{
  function initialize() public initializer {
    __ERC20_init("FiatTokenV1", "FT"); // name, symbol
  }
}