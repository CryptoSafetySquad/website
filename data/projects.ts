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
import Project79 from "./projects/project79/project79";
import OMNIBirds from "../pages/projects/omnibirds";

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
