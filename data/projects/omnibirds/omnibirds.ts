import type { Project } from "../../../types/project";
import Blockchains from "../../../enums/blockchains";
import news from "./news";
import ProjectStatus from "../../../enums/ProjectStatus";

const OMNIBirds: Project = {
  name: 'OMNI Birds',
  slug: 'omnibirds',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  status: ProjectStatus.Failed,
  opensea: 'https://opensea.io/collection/omnibirds-official',
  website: 'https://www.omnibirds.com/',
  bannerImage: 'https://i.seadn.io/gcs/files/e66305d2587c0ea7e29d7c1c1cd3cae5.png?auto=format&w=1920',
  twitter: 'OMNIBirds',
  wallets: [
    { name: 'Payouts', contract: '0x30b767ef4a5c83ede9a370355208b018689b405a', short: '0x30...b405a', explorerUrl: 'https://etherscan.io/address/0x30b767ef4a5c83ede9a370355208b018689b405a', blockchain: 'ethereum' }
  ],
  redflags: [
    'Lack of communication with community'
  ],
  news
}

export default OMNIBirds
