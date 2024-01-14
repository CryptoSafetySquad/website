// 

import type { BlockchainData } from "../../../types/BlockchainData"

import exchanges from "../../exchanges"
import defi from "../../defi"

const optimism: BlockchainData = {
  name: 'Optimism',
  slug: 'optimism',
  icon: '/images/icons/blockchains/optimism.png',
  iconSize: { w: 24, h: 24 },
  metadata: {
    website: 'https://www.optimism.io/',
    token: {
      name: 'OP',
      cmc: 'https://coinmarketcap.com/currencies/optimism-ethereum/'
    }
  },
  data: {
    explorers: [
      { link: 'https://optimistic.etherscan.io/', name: 'Optimism Explorer (Etherscan)' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      exchanges.sushi
    ],
    defi: [
    ],
  }
}

export default optimism
