const { ethers } = require('hardhat');

async function main() {
  const WORTHToken = await ethers.getContractFactory('WORTHToken');
  const worth = await WORTHToken.deploy();
  await worth.deployed();
  console.log('WORTH Token deployed to:', worth.address);

  const Timelock = await ethers.getContractFactory('TimelockController');
  const minDelay = 2 * 24 * 60 * 60;
  const timelock = await Timelock.deploy(minDelay, [], []);
  await timelock.deployed();
  console.log('Timelock deployed to:', timelock.address);

  const Governance = await ethers.getContractFactory('WORTHGovernance');
  const gov = await Governance.deploy(worth.address, timelock.address);
  await gov.deployed();
  console.log('Governance deployed to:', gov.address);

  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  const adminRole = await timelock.TIMELOCK_ADMIN_ROLE();

  await timelock.grantRole(proposerRole, gov.address);
  await timelock.grantRole(executorRole, ethers.constants.AddressZero);

  const [deployer] = await ethers.getSigners();
  await timelock.revokeRole(adminRole, deployer.address);

  console.log('Setup complete');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
