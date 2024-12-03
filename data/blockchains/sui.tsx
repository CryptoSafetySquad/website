import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import marketplaces from "../marketplaces"
import wallets from "../wallets"

const sui: BlockchainData = {
//  icon: '',
  name: 'Sui',
  slug: 'sui',
  metadata: {
    website: 'https://sui.io/',
    token: {
      name: 'SUI',
      cmc: 'https://coinmarketcap.com/currencies/sui/',
    }
  },
  data: {
    explorers: [
    ],
    centralisedExchanges: [
    ],
    nftMarketplaces: [
    ],
    wallets: [
      wallets.surf,
      wallets.onekey
    ],
    defi: [
    ]
  }
}

export default sui
