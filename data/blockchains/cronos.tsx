import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"

const cronos: BlockchainData = {
  // icon: '/images/logos/eth-diamond-purple.png',
  name: 'Cronos',
  slug: 'cronos',
  iconRatio: { y: 1, x: 0.8 },
  metadata: {
    token: {
      name: 'CRO',
      cmc: 'https://coinmarketcap.com/currencies/cronos/'
    },
    website: 'https://cronos.org/'
  },
  data: {
    explorers: [
      { name: 'Cronoscan', link: 'https://cronoscan.com/' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
    ],
    decentralisedExchanges: [
      // exchanges.uniswap,
      // exchanges.pancakeswap,
      // exchanges.apeswap,
      // exchanges.apollox,
    ],
    defi: [
      defi.beefy
    ],
    nftMarketplaces: [
      // marketplaces.x2y2,
      // marketplaces.magiceden,
      // marketplaces.blur,
    ],
    // protocols: [],
    // riskyProjects: [],
    wallets: [
      wallets.trustwallet,
      { name: 'Crypto.com DeFi Wallet', link: 'https://crypto.com/eea/defi-wallet' }
    ],
  }
}

export default cronos
