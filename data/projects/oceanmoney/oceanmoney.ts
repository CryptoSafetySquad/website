import type { Project } from "../../../types/project"
import people from "../../people"
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
    people.adamjavaid,
    people.sampitman,
    people.adamdignan,
    people.andersonarokium,
  ]
}

export default OceanMoney
