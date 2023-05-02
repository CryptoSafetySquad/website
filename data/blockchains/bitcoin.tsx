import exchanges from "../exchanges"
import wallets from "../wallets"
import businesses from "../businesses"
import { officialVideos, communityVideos } from "./bitcoin/videos"

const bitcoin = {
  icon: '/images/icons/bitcoin.svg',
  name: 'Bitcoin',
  slug: 'bitcoin',
  metadata: {
    token: {
      name: 'BTC',
      cmc: 'https://coinmarketcap.com/currencies/bitcoin/',
    }
  },
  data: {
    explorers: [
      { name: 'mempool.space', link: 'https://mempool.space/' },
      { name: 'Blockchain.com Explorer', link: 'https://www.blockchain.com/explorer' },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
    ],
    wallets: [
      wallets.trustwallet,
      wallets.cakewallet,
      wallets.unstoppable,
      wallets.exodus,
    ],
    businesses: [
      { name: 'Ledn', link: 'https://www.ledn.io/' },
      businesses.bitmain,
    ],
  },
  officialVideos,
  communityVideos,
}

export default bitcoin
