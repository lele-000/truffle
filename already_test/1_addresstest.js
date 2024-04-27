const addresstest = artifacts.require("addresstest");

contract("addresstest",accounts => {
    it("should return accounts1 as uint160",async ()=>{
        const instance = await addresstest.deployed();
        const result = await instance.changeIt();
        const result2 = await instance.changeIt2();
        const result3 = await instance.check1();
        console.log(result.toString());
        console.log(result2.toString());
        console.log(result3);
    })
})