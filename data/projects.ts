import type { Project } from "../types/project";
import { Blockchains } from "../enums/blockchains";

import AceMinersNFT from "./projects/aceminers/aceminers";
import DRIP from "./projects/drip/drip";
import HydroWhalesMiningClub from "./projects/hydrowhales/hydrowhales";
import OceanMoney from "./projects/oceanmoney/oceanmoney";
import StableFund from "./projects/stablefund/stablefund";
import YieldNodes from "./projects/yieldnodes/yieldnodes";
import YieldRobot from "./projects/yieldrobot/yieldrobot";
import EMPMoney from "./projects/emp/emp";

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

// export const EMPMoney: Project = {
//   name: 'EMP',
//   slug: 'empmoney',
//   type: 'Passive Income',
//   blockchain: Blockchains.Binance,
// }

const projects = {
  bluechip: [
    AceMinersNFT,
    BoredApeYachtClub,
    HydroWhalesMiningClub,
    OceanMoney,
    Project79,
  ],
  average: [
    EMPMoney
  ],
  risky: [
    DRIP,
  ],
  failed: [
    OMNIBirds,
    YieldNodes
  ],
  rugpulled: [
    StableFund,
    YieldRobot
  ]
}

export default projects
