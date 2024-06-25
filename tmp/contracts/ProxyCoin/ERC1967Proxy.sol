// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract FiatTokenProxy is ERC1967Proxy {
    

    constructor(address implementation) ERC1967Proxy(implementation, "") {}
}
