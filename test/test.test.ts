import { ethers } from "hardhat";

const contract = ethers.getContractFactory("ROI")

describe("main",()=>{
    it("deploys correctly",async ()=>{
        const c = (await contract).deploy("1000000000000000000000000000","ROI","ROI","0xF6A8FcE3Ed4005B23E318a3d3FFa9a014AE3E2f7")
    })
})