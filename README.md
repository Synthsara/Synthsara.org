# Synthsara Governance Contracts

This repo now contains a minimal Hardhat setup used to deploy the WORTH token and
governance contracts on Goerli.

## Deploying

1. Install dependencies

```bash
npm install
npm install --save-dev solc@0.8.20
```

2. Create a `.env` file with your Infura key and deployer private key:

```
INFURA_API_KEY=your_infura_project_id
PRIVATE_KEY=0xabcdef...
```

If your environment blocks outgoing HTTPS traffic, Hardhat may fail to download
the Solidity compiler. Installing the `solc` package locally (as above) lets
Hardhat use the bundled compiler instead.

3. Deploy to Goerli:

```bash
npm run deploy:goerli
```

The script prints deployed contract addresses for the token, timelock and
governor.
