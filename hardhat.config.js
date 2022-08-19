require("@nomiclabs/hardhat-waffle");
require('hardhat-docgen');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  mocha: {
    timeout: 800000
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      forking: {
        url: "https://rough-frosty-leaf.bsc.discover.quiknode.pro/9363314ccc6ba552854beccbc3b0d10ff7afaa70/",
      },
    },
  },
  solidity: {
    compilers: [
      {
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
        version: "0.8.0",
      },
    ],
  },
};

