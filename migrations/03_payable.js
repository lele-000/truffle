const payableTest = artifacts.require('payableTest');

module.exports = function(deployer) {
    deployer.deploy(payableTest);
}