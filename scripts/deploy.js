//import
const { Contract } = require("ethers")
const { ethers } = require("hardhat")

//async main
async function main() {
    // To get the address where the Contract form
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)
    console.log("Deploying contract...")
    
    // To get the address where the Contract is go 
    const simpleStorage = await ethers.deployContract("SimpleStorage")
    console.log("Deployed contracts to account:", await simpleStorage.getAddress());
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

