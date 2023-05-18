
import "@nomicfoundation/hardhat-toolbox";
import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "hardhat-gas-reporter"

const scrollalpha: NetworkUserConfig = {
  url: "https://alpha-rpc.scroll.io/l2",
  chainId: 534353,
  accounts: [process.env.KEY_TESTNET!],
};
const bscTestnet: NetworkUserConfig = {
  url: "https://data-seed-prebsc-1-s2.binance.org:8545",
  chainId: 97,
  accounts: [process.env.KEY_TESTNET!],
};
const eth: NetworkUserConfig = {
  url: `https://mainnet.infura.io/v3/${process.env.IFURA_KEY}`,
  chainId: 1,
  accounts: [process.env.KEY_MAINNET!],
};
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
     testnet: scrollalpha,
     mainnet: eth,
     bsctest:bscTestnet
  },
  etherscan: {
    apiKey: {
      scrollAlpha: 'abc',
      mainnet:process.env.ETHSCAN_API_KEY!,
      bscTestnet:process.env?.BSCSCAN_API_KEY!
    },
    customChains: [
      {
        network: 'scrollAlpha',
        chainId: 534353,
        urls: {
          apiURL: 'https://blockscout.scroll.io/api',
          browserURL: 'https://blockscout.scroll.io/',
        },
      },
    ],
  },
  solidity: "0.8.18",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  gasReporter: {
    enabled: true,
    currency: 'ETH',
    gasPrice: 38
  }
};

export default config;

