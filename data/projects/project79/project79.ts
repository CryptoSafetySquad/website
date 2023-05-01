import type { Project } from "../../../types/project";
import news from "./news";
import earnings from "./earnings";
import Blockchains from "../../../enums/blockchains";
import { officialVideos, communityVideos } from "./videos";

const Project79: Project = {
  name: 'Project 79',
  slug: 'project79',
  type: 'Passive Income',
  textClass: 'dark:text-gold',
  website: 'https://www.project79.com/',
  blockchain: [Blockchains.Ethereum, Blockchains.Binance],
  bannerImage: 'https://pbs.twimg.com/media/FdBHe8kaMAEk8_2?format=jpg&name=4096x4096',
  news,
  earnings,
  relatedProjects: [
    { name: 'Hydro Whales Mining Club', link: 'hydro-whales', desc: 'Passive Income NFT' },
    { name: 'Ocean Money', link: 'ocean-money', desc: 'Banking and Crypto Services' },
  ],
  officialVideos,
  communityVideos,
}

export default Project79
