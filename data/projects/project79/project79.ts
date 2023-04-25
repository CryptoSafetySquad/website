import type { Project } from "../../../types/project";
import news from "./news";
import earnings from "./earnings";
import Blockchains from "../../../enums/blockchains";

const Project79: Project = {
  name: 'Project 79',
  slug: 'project79',
  type: 'Passive Income',
  website: 'https://www.project79.com/',
  blockchain: [Blockchains.Ethereum, Blockchains.Binance],
  bannerImage: 'https://pbs.twimg.com/media/FdBHe8kaMAEk8_2?format=jpg&name=4096x4096',
  news,
  earnings,
  relatedProjects: [
    { name: 'Hydro Whales Mining Club', link: 'hydro-whales', desc: 'Passive Income NFT' },
  ]
}

export default Project79
