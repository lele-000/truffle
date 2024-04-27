pragma solidity ^0.5.17;

contract addresstest {
     address public account1 = 0xe65f418B14AF660A6e69f04EE7e4dC94bB0D9f27;
    address public a=0x5C92B050Fda1fCaCf353BddF474bd9A41fEfB377;
    
     function changeIt() public view returns(uint160) {
        return uint160(account1);
     }

     function changeIt2() public view returns(address) {
      return address(1315192157708673347696721970112989957208375402279);
     }

     function check1() public view returns(bool) {
      return account1>a;
     }
}