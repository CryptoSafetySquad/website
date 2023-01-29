import type { Project } from "../../../types/project"
import Blockchains from "../../../enums/blockchains"

export const YieldNodes: Project = {
  name: 'YieldNodes',
  slug: 'yieldnodes',
  type: 'Passive Income',
  blockchain: [Blockchains.Ethereum, Blockchains.Bitcoin],
  redflags: [
    'Lots of "pointless" coins being masternoded to generate profit but with no real use cases.'
  ],
}

export default YieldNodes
