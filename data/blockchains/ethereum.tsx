import exchanges from "../exchanges"
import defi from "../defi"
import marketplaces from "../marketplaces"
import wallets from "../wallets"

const ethereum = {
  icon: '/images/logos/eth-diamond-purple.png',
  name: 'Ethereum',
  slug: 'ethereum',
  iconSize: { w: 14, h: 20 },
  metadata: {
    token: {
      name: 'ETH',
      cmc: 'https://coinmarketcap.com/currencies/ethereum/'
    },
    website: 'https://ethereum.org'
  },
  data: {
    explorers: [
      { name: 'Etherscan', link: 'https://etherscan.io' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      exchanges.uniswap,
      exchanges.pancakeswap,
      exchanges.apeswap,
      exchanges.apollox,
    ],
    defi: [
      defi.beefy
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
      marketplaces.opensea,
      marketplaces.x2y2,
      marketplaces.magiceden,
      marketplaces.blur,
    ],
    // protocols: [],
    // riskyProjects: [],
    wallets: [
      wallets.metamask,
      wallets.trustwallet,
      wallets.rabby,
    ],
  }
}

export default ethereum
