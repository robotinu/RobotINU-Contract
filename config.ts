import {BigNumber} from "ethers"
export default{
    initialSupply:{
        "mainnet":BigNumber.from("1000000000000000000000000000"),
        "testnet":BigNumber.from("1000000000000000000000000000"),
        "bsctest":BigNumber.from("1000000000000000000000000000")
    },
    name:{
        "mainnet":"Robot inu",
        "testnet":"ROBO",
        "bsctest":"ROI"
    },
    symbol:{
        "mainnet":"ROI",
        "testnet":"ROBO",
        "bsctest":"ROI"
    },
    to:{
        "mainnet":"0xF7C1A9BbAb6e0Bb02f3C6b2e75c09C0DC9D23508",
        "testnet":"0xF6A8FcE3Ed4005B23E318a3d3FFa9a014AE3E2f7",
        "bsctest":"0xF6A8FcE3Ed4005B23E318a3d3FFa9a014AE3E2f7"
    },
}