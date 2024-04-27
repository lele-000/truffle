const payableTest = artifacts.require('payableTest');

contract('payableTest',payable=>{
    it("if",async ()=>{
        const instance = await payableTest.deployed();
        const result = await instance.getBalance();
        const result11 = await instance.getThis();
        const result2= await instance.getoneBalance();
        console.log(result);
        console.log(result11);
        console.log(result2.toString());

    })
})