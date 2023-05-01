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
}

export default OceanMoney
