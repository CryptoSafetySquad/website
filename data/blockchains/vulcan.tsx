import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"
import marketplaces from "../marketplaces"

const vulcan: BlockchainData = {
  name: 'Vulcan',
  slug: 'vulcan',
  // icon: '/images/icons/brand/binance.svg',
  metadata: {
    token: {
      name: 'VUL',
      // cmc: 'https://coinmarketcap.com/currencies/bnb/',
    },
    website: 'https://vulcanblockchain.com/',
  },
  data: {
    // explorers: [
    //   { name: 'BscScan', link: 'https://bscscan.com/', },
    // ],
    // centralisedExchanges: [
    //   exchanges.binance,
    //   exchanges.kucoin,
    //   exchanges.gateio,
    //   exchanges.coinbase,
    // ],
    // decentralisedExchanges: [
    //   exchanges.uniswap,
    //   exchanges.pancakeswap,
    //   exchanges.apeswap,
    //   exchanges.apollox,
    //   { name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' },
    //   { name: 'Thena', link: 'https://thena.fi/' },
    // ],
    // defi: [
    //   defi.autofarm,
    //   defi.beefy,
    //   defi.magik,
    //   defi.yieldwolf,
    //   defi.dexVaults,
    // ],
    // protocols: [
    //   { name: 'MDB (Make Defi Better)', link: 'https://www.mdb.fund/' },
    // ],
    // projects: [
    //   EMPMoney,
    // ],
    // nftMarketplaces: [
    //   marketplaces.alphaShares,
    // ],
    // riskyProjects: [
    //   { name: 'DRIP', link: 'https://drip.community/' },
    // ],
    // wallets: [
    //   wallets.exodus,
    //   wallets.rabby,
    //   wallets.trustwallet,
    //   wallets.metamask,
    // ],
  }
}

export default vulcan
