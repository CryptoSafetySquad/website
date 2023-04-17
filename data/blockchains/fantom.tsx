import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"
import marketplaces from "../marketplaces"

const fantom: BlockchainData = {
  icon: '/images/icons/blockchains/fantom.png',
  name: 'Fantom',
  slug: 'fantom',
  iconSize: {
    w: 24,
    h: 24,
  },
  metadata: {
    website: 'https://fantom.foundation/',
    token: {
      name: 'FTM',
      cmc: 'https://coinmarketcap.com/currencies/fantom/',
    }
  },
  data: {
    explorers: [
      { name: 'FTMScan', link: 'https://ftmscan.com/' },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      { name: 'SpookySwap', link: 'https://spooky.fi/#/' },
      { name: 'SpiritSwap', link: 'https://swap.spiritswap.finance/' },
    ],
    defi: [
      defi.beefy,
      defi.dexVaults,
    ],
    wallets: [
      wallets.trustwallet,
    ],
    nftMarketplaces: [
      marketplaces.alphaShares,
    ]
  }
}

export default fantom
