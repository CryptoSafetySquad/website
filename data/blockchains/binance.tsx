import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"
import marketplaces from "../marketplaces"

import EMPMoney from "../projects/emp/emp"

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
      exchanges.binance,
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
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
      defi.dexVaults,
    ],
    protocols: [
      { name: 'MDB (Make Defi Better)', link: 'https://www.mdb.fund/' },
    ],
    projects: [
      EMPMoney,
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
    ],
  }
}

export default binance
