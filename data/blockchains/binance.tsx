import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"
import marketplaces from "../marketplaces"

const binance: BlockchainData = {
  name: 'Binance',
  slug: 'binance',
  icon: '/images/icons/brand/binance.svg',
  website: 'https://www.bnbchain.org/',
  metadata: {
    token: {
      name: 'BNB',
      cmc: 'https://coinmarketcap.com/currencies/bnb/',
    }
  },
  data: {
    explorers: [
      { name: 'BscScan', link: 'https://bscscan.com/', },
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
      { name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' },
      { name: 'Thena', link: 'https://thena.fi/' },
    ],
    defi: [
      defi.autofarm,
      defi.beefy,
      defi.magik,
      defi.yieldwolf,
      defi.dexVaults,
    ],
    protocols: [
      { name: 'EMP Money', link: 'https://emp.money/' },
      { name: 'MDB (Make Defi Better)', link: 'https://www.mdb.fund/' },
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
    ],
    riskyProjects: [
      { name: 'DRIP', link: 'https://drip.community/' },
    ],
    wallets: [
      wallets.exodus,
      wallets.rabby,
      wallets.trustwallet,
      wallets.metamask,
    ]
  }
}

export default binance
