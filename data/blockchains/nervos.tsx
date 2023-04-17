import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const nervos: BlockchainData = {
  name: 'Nervos',
  slug: 'nervos',
  icon: {
    default: '/images/icons/blockchains/nervos.svg',
    darkMode: '/images/icons/blockchains/nervos-green.svg'
  },
  data: {
    explorers: [
      { link: 'https://explorer.nervos.org/', name: 'Nervos Explorer' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
  },
  metadata: {
    website: 'https://www.nervos.org/',
    token: {
      name: 'CKB',
      cmc: 'https://coinmarketcap.com/currencies/nervos-network/'
    }
  }
}

export default nervos
