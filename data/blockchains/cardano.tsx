import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const cardano: BlockchainData = {
  icon: '/images/logos/cardano.webp',
  name: 'Cardano',
  slug: 'cardano',
  metadata: {
    website: 'https://cardano.org/',
    token: {
      name: 'ADA',
      cmc: 'https://coinmarketcap.com/currencies/cardano/'
    }
  },
  data: {
    explorers: [
      { link: 'https://explorer.cardano.org/', name: 'Cardano Explorer' }
    ],
    centralisedExchanges: [
      exchanges.binance,
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      exchanges.pancakeswap
      // { link: 'https://lattice.is/dashboard', name: 'Lattice' },
    ],
    wallets: [
      { link: 'https://daedaluswallet.io/', name: 'Daedalus Wallet' },
      { link: 'https://yoroi-wallet.com/', name: 'Yoroi Wallet' }
    ]
  }
}

export default cardano
