// const main = async() => {
//   const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
//   const waveContract = await waveContractFactory.deploy() 
//   await waveContract.deployed() 



//   console.log("contract deployed at addersss: ", waveContract.address);
//     /**
//    * Let's send a few waves!
//    */

//   let waveTxn = await waveContract.wave("A message!");
//   await waveTxn.wait(); // Wait for the transaction to be mined


//   const [owner] = await hre.ethers.getSigners();
//   waveTxn = await waveContract.connect(owner).wave("Another message!");
//   await waveTxn.wait(); // Wait for the transaction to be mined

//   let allWaves = await waveContract.getAllWaves();
//   console.log(allWaves);

// }

const main = async() => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);
}





const runMain = async () => {
  try {
    await main(); 


    process.exit(0)
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

runMain()