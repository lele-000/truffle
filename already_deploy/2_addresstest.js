const AddressTest = artifacts.require("addresstest");

module.exports = function(deployer) {
    deployer.deploy(AddressTest);
}