import type { BlockchainData } from "../../types/BlockchainData"
import wallets from "../wallets"
import exchanges from "../exchanges"

const monero: BlockchainData = {
  name: 'Monero',
  slug: 'monero',
  icon: '/images/icons/blockchains/monero.png',
  iconRatio: { x: 1, y: 1 },
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
      exchanges.coinbase,
    ],
    wallets: [
      wallets.cakewallet,
    ]
  }
}

export default monero
