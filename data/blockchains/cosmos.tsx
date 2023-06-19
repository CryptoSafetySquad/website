import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const cosmos: BlockchainData = {
  // icon: '/images/logos/.webp',
  name: 'Cosmos',
  slug: 'cosmos',
  metadata: {
    website: 'https://cosmos.network/',
    token: {
      name: 'ATOM',
      cmc: 'https://coinmarketcap.com/currencies/cosmos/'
    }
  },
  data: {
    centralisedExchanges: [
      exchanges.binance,
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      exchanges.pancakeswap
    ],
    wallets: [
      { link: 'https://www.keplr.app/', name: 'Keplr' },
    ]
  }
}

export default cosmos
