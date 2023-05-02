import type { Project } from "../../../types/project";
import Blockchains from "../../../enums/blockchains";
import ProjectStatus from "../../../enums/ProjectStatus";

import news from "./news";
import { officialVideos, communityVideos } from "./videos";

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
  news,
  team: [
    { name: 'Stuart Rex', linkedin: 'https://www.linkedin.com/in/stuartrex7/', twitter: 'https://twitter.com/StuartRex777' },
    { name: 'Russell Thomas', linkedin: 'https://www.linkedin.com/in/russell-thomas-557390204/' },
    { name: 'Shay Thomas', linkedin: 'https://www.linkedin.com/in/shay-thomas/' },
  ],
  officialVideos,
  communityVideos,
}

export default OMNIBirds
