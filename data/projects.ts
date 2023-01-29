import type { Project } from "../types/project";
import { Blockchains } from "../enums/blockchains";

import AceMinersNFT from "./projects/aceminers/aceminers";
import DRIP from "./projects/drip/drip";
import HydroWhalesMiningClub from "./projects/hydrowhales/hydrowhales";
import OceanMoney from "./projects/oceanmoney/oceanmoney";
import StableFund from "./projects/stablefund/stablefund";
import YieldNodes from "./projects/yieldnodes/yieldnodes";
import YieldRobot from "./projects/yieldrobot/yieldrobot";

export const BoredApeYachtClub: Project = {
  name: 'Bored Ape Yacht Club',
  blockchain: Blockchains.Ethereum,
  // slug: 'boredapeyachtclub', // disable slug while page has no material content
  opensea: 'https://opensea.io/collection/boredapeyachtclub',
  type: 'NFT: Utility',
  website: 'https://boredapeyachtclub.com/',
  bannerImage: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920',
  twitter: 'BoredApeYC'
}

export const OMNIBirds: Project = {
  name: 'OMNI Birds',
  slug: 'omnibirds',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  opensea: 'https://opensea.io/collection/omnibirds-official',
  website: 'https://www.omnibirds.com/',
  bannerImage: 'https://i.seadn.io/gcs/files/e66305d2587c0ea7e29d7c1c1cd3cae5.png?auto=format&w=1920',
  twitter: 'OMNIBirds',
  wallets: [
    { name: 'Payouts', contract: '0x30b767ef4a5c83ede9a370355208b018689b405a', short: '0x30...b405a', explorerUrl: 'https://etherscan.io/address/0x30b767ef4a5c83ede9a370355208b018689b405a', blockchain: 'ethereum' }
  ]
}

export const Project79: Project = {
  name: 'Project 79',
  slug: 'project79',
  type: 'Passive Income',
  blockchain: [Blockchains.Ethereum, Blockchains.Binance],
  bannerImage: 'https://pbs.twimg.com/media/FdBHe8kaMAEk8_2?format=jpg&name=4096x4096'
}

export const EMPMoney: Project = {
  name: 'EMP',
  slug: 'empmoney',
  type: 'Passive Income',
  blockchain: Blockchains.Binance,
  tokens: [
    { name: 'EMP', contract: '0x3b248cefa87f836a4e6f6d6c9b42991b88dc1d58', blockchain: 'BSC', short: '0x3b...1d58', explorerUrl: 'https://bscscan.com/token/0x3b248cefa87f836a4e6f6d6c9b42991b88dc1d58' },
    { name: 'ESHARE', contract: '0xDB20F6A8665432CE895D724b417f77EcAC956550', blockchain: 'BSC', short: '0xDB...6550', explorerUrl: 'https://bscscan.com/token/0xDB20F6A8665432CE895D724b417f77EcAC956550' }
  ],
  contracts: [
    { name: 'EMP Detonator', contract: '0xa9ea52d60111073e34fad966c03f70684e5b205d', blockchain: 'BSC', short: '0xa9...205d', explorerUrl: 'https://bscscan.com/address/0xa9ea52d60111073e34fad966c03f70684e5b205d' },
  ],
  nfts: [
    { name: 'Sentinel Squadron NFT', contract: '0xd689af61148cb91e286d0d4e92d67120e35c37b8', blockchain: 'BSC', short: '0xd6...37b8', explorerUrl: 'https://bscscan.com/address/0xd689af61148cb91e286d0d4e92d67120e35c37b8' },
    { name: 'Detonator Defender NFT', contract: '0x6df246a1e0064169518da5d1e1905e37410e8694', blockchain: 'BSC', short: '0x6d...8694', explorerUrl: 'https://bscscan.com/address/0x6df246a1e0064169518da5d1e1905e37410e8694' },
  ]
}

const projects = {
  bluechip: [
    AceMinersNFT,
    BoredApeYachtClub,
    HydroWhalesMiningClub,
    OceanMoney,
    Project79,
  ],
  average: [
    OMNIBirds,
    EMPMoney
  ],
  risky: [
    DRIP,
  ],
  failed: [
    YieldNodes
  ],
  rugpulled: [
    StableFund,
    YieldRobot
  ]
}

export default projects
