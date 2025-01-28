import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import wallets from "../wallets"
import marketplaces from "../marketplaces"

const fantom: BlockchainData = {
  icon: '/images/icons/blockchains/fantom.png',
  name: 'Sonic (ex: Fantom)',
  slug: 'fantom',
  iconSize: {
    w: 24,
    h: 24,
  },
  metadata: {
    website: 'https://www.soniclabs.com/',
    token: {
      name: 'S',
      cmc: 'https://coinmarketcap.com/currencies/sonic/',
    }
  },
  data: {
    explorers: [
      { name: 'FTMScan', link: 'https://ftmscan.com/' },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
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
