const { ethers } = require("hardhat");

async function main() {
    const CertificateStorage = await ethers.getContractFactory("CertificateStorage");
    const contract = await CertificateStorage.deploy();

    // Wait for the deployment to be mined
    await contract.deployed();

    console.log("CertificateStorage deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});