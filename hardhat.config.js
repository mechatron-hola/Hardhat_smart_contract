const { task } = require("hardhat/config")

require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config

// this is a compile hardhat task, to learn how to create your own go to
// hardhat task
// task("accounts", "Prints the list of acconuts", async (taskArgs, hre) => {
//     const accounts = await hre.ethers.getSigners()
// })

/** @ type import('hardhat/config').HardhatUserConfig */

// const ganache_rpc_url = process.env.GANACHE_RPC_URL
// console.log(typeof ganache_rpc_url)
// const privateKey = process.env.PRIVATE_KEY
// console.log(typeof(privateKey))

const sepolia_rpc_url = process.env.SEPOLIA_RPC_URL //|| 
// console.log(typeof(sepolia_rpc_url))
const privateKey_sepolia = process.env.PRIVATE_KEY_SEPOLIA
// console.log(typeof(privateKey_sepolia))

module.exports = {
    defaultNetwork: "hardhat",

    networks: {
        hardhat: {},

        localhost: {
          url: "http://127.0.0.1:8545"
        },

        // ganache: {
        //     url: ganache_rpc_url,
        //     accounts: [   ],
        //     chainId: 1337,
        // },

        sepolia:{
          url:sepolia_rpc_url,
          accounts:[privateKey_sepolia], 
          // chainId: 11155111,
        },
    },
    solidity: "0.8.8",
}



