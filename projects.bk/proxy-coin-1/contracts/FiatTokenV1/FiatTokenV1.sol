// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {UUPSUpgradeable} from "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import {AbstractFiatToken} from "./AbstractFiatToken.sol";

contract FiatTokenV1 is AbstractFiatToken, UUPSUpgradeable {
    string public name;
    string public symbol;
    string public currency;
    uint256 internal totalSupply_;
    address public minterAdmin;
    uint8 public decimals;
    uint8 internal initializedVersion;

    mapping(address => uint256) internal balances;
    mapping(address => mapping(address => uint256)) internal allowed;
    mapping(address => bool) internal minters;
    mapping(address => uint256) internal minterAllowed;

    function initialize(
        string memory tokenName,
        string memory tokenSymbol,
        string memory tokenCurrency,
        uint8 tokenDecimals
    ) public {
        require(
            initializedVersion == 0,
            "FiatToken: contract is already initialized"
        );

        name = tokenName;
        symbol = tokenSymbol;
        currency = tokenCurrency;
        decimals = tokenDecimals;
        initializedVersion = 1;
    }


    function allowance(address owner, address spender)
        external
        view
        override
        returns (uint256)
    {
        return allowed[owner][spender];
    }

    function totalSupply() external view override returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address account)
        external
        view
        override
        returns (uint256)
    {
        return balances[account];
    }


    /**
     * @notice Set spender's allowance over the caller's tokens to be a given
     * value.
     * @param spender   Spender's address
     * @param value     Allowance amount
     * @return True if successful
     */
    function approve(
        address spender,
        uint256 value
    ) external override returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    /**
     * @dev Internal function to set allowance
     * @param owner     Token owner's address
     * @param spender   Spender's address
     * @param value     Allowance amount
     */
    function _approve(
        address owner,
        address spender,
        uint256 value
    ) internal override {
        require(
            owner != address(0),
            "FiatToken: approve from the zero address"
        );
        require(
            spender != address(0),
            "FiatToken: approve to the zero address"
        );
        allowed[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    )
        external
        override
        returns (bool)
    {
        uint256 _allowed = allowed[from][msg.sender];
        if (_allowed != type(uint256).max) {
            require(_allowed >= value, "FiatToken: transfer amount exceeds allowance");
            allowed[from][msg.sender] = _allowed - value;
        }
        _transfer(from, to, value);
        return true;
    }

    function transfer(address to, uint256 value)
        external
        override
        returns (bool)
    {
        _transfer(msg.sender, to, value);
        return true;
    }

    function _transfer(
        address from,
        address to,
        uint256 value
    ) internal override {
        require(from != address(0), "FiatToken: transfer from the zero address");
        require(to != address(0), "FiatToken: transfer to the zero address");
        uint256 _balances = balances[from];
        require(
            value <= _balances,
            "FiatToken: transfer amount exceeds balance"
        );

        balances[from] = _balances - value;
        balances[to] = balances[to] + value;
        emit Transfer(from, to, value);
    }


    function increaseAllowance(address spender, uint256 increment)
        external
        returns (bool)
    {
        _increaseAllowance(msg.sender, spender, increment);
        return true;
    }

    function _increaseAllowance(
        address owner,
        address spender,
        uint256 increment
    ) internal override {
        _approve(owner, spender, allowed[owner][spender] + increment);
    }


    function decreaseAllowance(address spender, uint256 decrement)
        external
        returns (bool)
    {
        _decreaseAllowance(msg.sender, spender, decrement);
        return true;
    }

    function _decreaseAllowance(
        address owner,
        address spender,
        uint256 decrement
    ) internal override {
        uint256 _allowed = allowed[owner][spender];
        require(
            decrement <= _allowed,
            "FiatToken: decreased allowance below zero"
        );
        _approve(owner, spender, _allowed - decrement);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
    {}
}
