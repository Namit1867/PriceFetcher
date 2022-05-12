const hre = require("hardhat");
require("@nomiclabs/hardhat-etherscan");


async function main() {

    const priceFetcher = await hre.ethers.getContractFactory("PriceFetcher");
    const priceFetcherInstance = await priceFetcher.deploy();
    await priceFetcherInstance.deployed();
    const priceFetcherAddress = priceFetcherInstance.address;
    console.log("Price Fetcher Deployed :",priceFetcherAddress);
  
  }

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
