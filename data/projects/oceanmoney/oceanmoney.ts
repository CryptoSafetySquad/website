import type { Project } from "../../../types/project"
import news from "./news"
import { officialVideos, communityVideos } from './videos'

export const OceanMoney: Project = {
  name: 'Ocean Money',
  slug: 'ocean-money',
  type: 'Banking Services, Crypto Services',
  website: 'https://www.ocean.money/',
  bannerImage: 'https://www.ocean.money/_next/image?url=%2Fimages%2Fblog-1.png&w=1920&q=75',
  twitter: 'OceanMoney_',
  news,
  officialVideos,
  communityVideos,
  relatedProjects: [
    { name: 'Hydro Whales Mining Club', link: 'hydro-whales', desc: 'Passive Income NFT' },
    { name: 'Project 79', link: 'project79', desc: 'Gold Arbitrage' },
  ],
  team: [
    { name: 'Sam Pitman', twitter: 'https://twitter.com/_sampitman', linkedin: 'https://www.linkedin.com/in/sam-pitman-3b5959138/' },
    { name: 'Adam Dignan', linkedin: 'https://www.linkedin.com/in/adam-dignan-b7985418b/' },
    { name: 'Adam Javaid', linkedin: 'https://www.linkedin.com/in/adam-javaid-511397161/' },
    { name: 'Anderson Arokium', linkedin: 'https://www.linkedin.com/in/andersonarokium/' },
  ]
}

export default OceanMoney
