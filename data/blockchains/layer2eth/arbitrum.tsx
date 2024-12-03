import type { BlockchainData } from "../../../types/BlockchainData"

import exchanges from "../../exchanges"
import defi from "../../defi"
import marketplaces from "../../marketplaces"

const arbitrum: BlockchainData = {
  name: 'Arbitrum',
  slug: 'arbitrum',
  iconSize: { w: 24, h: 24 },
  icon: '/images/icons/blockchains/arbitrum-shield.png',
  metadata: {
    website: 'https://arbitrum.io/',
    token: {
      name: 'ARB',
      cmc: 'https://coinmarketcap.com/currencies/arbitrum/'
    }
  },
  data: {
    explorers: [
      { name: 'ArbiScan', link: 'https://arbiscan.io/', },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      exchanges.apollox,
      exchanges.sushi,
    ],
    defi: [
      defi.yieldYak,
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
      marketplaces.magiceden
    ],
  }
}

export default arbitrum
