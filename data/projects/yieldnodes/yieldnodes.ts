import type { Project } from "../../../types/project"
import Blockchains from "../../../enums/blockchains"

import news from "./news"
import ProjectStatus from "../../../enums/ProjectStatus"

export const YieldNodes: Project = {
  name: 'YieldNodes',
  slug: 'yieldnodes',
  type: 'Passive Income',
  status: ProjectStatus.Failed,
  website: 'https://yieldnodes.com/',
  blockchain: [Blockchains.Ethereum, Blockchains.Bitcoin],
  redflags: [
    'Lots of "pointless" coins being masternoded to generate profit but with no real use cases.'
  ],
  domains: [
    'yieldnodes.com'
  ],
  news
}

export default YieldNodes
