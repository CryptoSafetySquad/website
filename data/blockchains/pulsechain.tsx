import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const nervos: BlockchainData = {
  name: 'PulseChain',
  slug: 'pulsechain',
  // icon: {
    // default: '/images/icons/blockchains/nervos.svg',
    // darkMode: '/images/icons/blockchains/nervos-green.svg'
  // },
  data: {
    explorers: [
      { link: 'https://scan.pulsechain.com/', name: 'PulseChain Scan' }
    ],
    centralisedExchanges: [
      // exchanges.kucoin,
      // exchanges.gateio,
      // exchanges.coinbase,
      // exchanges.binance,
    ],
  },
  metadata: {
    website: 'https://pulsechain.com/',
    token: {
      name: 'PLS',
      cmc: 'https://coinmarketcap.com/currencies/pulsechain/'
    }
  }
}

export default nervos
