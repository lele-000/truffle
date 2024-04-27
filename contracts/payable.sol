pragma solidity ^0.5.17;

contract payableTest {
    function pay() public payable {

    }

    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }

    function getThis() public view returns(address) {
        return address(this);
    }

    function getoneBalance() public view returns(uint) {
        address account = 0xe65f418B14AF660A6e69f04EE7e4dC94bB0D9f27;
        return account.balance;
    }
}