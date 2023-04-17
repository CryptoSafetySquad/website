import type { BlockchainData } from "../../types/BlockchainData"
import wallets from "../wallets"
import exchanges from "../exchanges"

const monero: BlockchainData = {
  icon: '/images/icons/blockchains/monero.png',
  name: 'Monero',
  slug: 'monero',
  iconSize: {
    w: 24,
    h: 24,
  },
  metadata: {
    website: 'https://www.getmonero.org/',
    token: {
      name: 'XMR',
      cmc: 'https://coinmarketcap.com/currencies/monero/'
    }
  },
  data: {
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    wallets: [
      wallets.cakewallet,
    ]
  }
}

export default monero
