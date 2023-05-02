import exchanges from "../exchanges"
import marketplaces from "../marketplaces"
import defi from "../defi"
import wallets from "../wallets"

const avalanche = {
  name: 'Avalanche',
  slug: 'avalanche',
  icon: '/images/icons/blockchains/avalanche.svg',
  metadata: {
    website: 'https://www.avax.com/',
    token: {
      name: 'AVAX',
      cmc: 'https://coinmarketcap.com/currencies/avalanche/'
    }
  },
  data: {
    explorers: [
      { name: 'Snowtrace', link: 'https://snowtrace.io/', },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
    ],
    decentralisedExchanges: [
      { name: 'TraderJoe', link: 'https://traderjoexyz.com/' }
    ],
    defi: [
      defi.yieldwolf,
    ],
    protocols: [
      { link: 'https://grapefinance.app/', name: 'Grape Finance'  }
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
    ],
    riskyProjects: [],
    wallets: [
      wallets.trustwallet,
    ]
  }
}

export default avalanche
