import type { Project } from "../../../types/project"
import Blockchains from "../../../enums/blockchains"
import ProjectStatus from "../../../enums/ProjectStatus"
import news from "./news"
import redflags from "./redflags"

export const StableFund: Project = {
  name: 'StableFund',
  slug: 'stablefund',
  status: ProjectStatus.RugPulled,
  type: 'Passive Income',
  blockchain: [Blockchains.Polygon, Blockchains.Binance],
  redflags,
  tokens: [
    {
      name: 'SFUSD',
      contract: '0x93fee753b548b4cf93c41ada062f80de12710db8',
      short: '0x93...0db8',
      explorerUrl: 'https://polygonscan.com/token/0x93fee753b548b4cf93c41ada062f80de12710db8',
      blockchain: 'polygon'
    },
    {
      name: 'SROCKET',
      contract: '0x94788309d420ad9f9f16d79fc13ab74de83f85f7',
      short: '0x94...85f7',
      explorerUrl: 'https://polygonscan.com/token/0x94788309d420ad9f9f16d79fc13ab74de83f85f7',
      blockchain: 'polygon'
    }
  ],
  news,
  domains: [
    'sfusd.io',
    'stablefund.app',
    'stableone.io',
    'srockettoken.io',
    'sdragonsden.io',
  ]
}

export default StableFund
