import type { BlockchainData } from "../../../types/BlockchainData"
import exchanges from "../../exchanges"
import defi from "../../defi"
import marketplaces from "../../marketplaces"
import wallets from "../../wallets"

const polygon: BlockchainData = {
  icon: '/images/logos/polygon.png',
  name: 'Polygon',
  slug: 'polygon',
  metadata: {
    website: 'https://polygon.technology/',
    token: {
      name: 'MATIC',
      cmc: 'https://coinmarketcap.com/currencies/polygon/'
    }
  },
  communityVideos: [
  ],
  data: {
    explorers: [
      { link: 'https://polygonscan.com/', name: 'PolygonScan' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    defi: [
      defi.magik,
      defi.beefy,
    ],
    decentralisedExchanges: [
      exchanges.uniswap,
      exchanges.quickswap,
      exchanges.sushi,
      exchanges.apeswap,
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
      marketplaces.magiceden,
    ],
    wallets: [
      wallets.trustwallet,
      wallets.metamask,
      wallets.exodus,
    ]
  }
}

export default polygon
