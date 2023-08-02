const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("simpleStorage", {} => {})
describe("simpleStorage", function () {
    // let simpleStorageFactory
    // let simpleStorage
    let simpleStorageFactory, simpleStorage

    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("simpleStorage")
        SimpleStorage = await simpleStorageFactory.deploy()
    })
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0" // pass a diff value to test
        assert.equal(currentValue.toString(), expectedValue)
        expect(currentValue, toString(), to.equal(expectedValue)) //
    })

    // it.only() //to run the in one of the test case
    it("sholud update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
