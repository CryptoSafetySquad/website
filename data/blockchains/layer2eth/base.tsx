import type { BlockchainData } from "../../../types/BlockchainData"

import exchanges from "../../exchanges"
import defi from "../../defi"

const base: BlockchainData = {
  name: 'Base',
  slug: 'base',
  // icon: '/images/icons/blockchains/optimism.png',
  iconSize: { w: 24, h: 24 },
  metadata: {
    // website: 'https://www.optimism.io/',
    // token: {
    //   // name: 'OP',
    //   // cmc: 'https://coinmarketcap.com/currencies/optimism-ethereum/'
    // }
  },
  data: {
    explorers: [
      { link: 'https://basescan.org/', name: 'BaseScan (Etherscan)' }
    ],
    centralisedExchanges: [
      // exchanges.kucoin,
      // exchanges.gateio,
    ],
    decentralisedExchanges: [
      { link: 'https://aerodrome.finance/', name: 'Aerodrome' },
      { link: 'https://base.velocimeter.xyz/home', name: 'BVM Velocimeter' },
      { link: 'https://app.alienbase.xyz/', name: 'Alien Base' },
      { link: 'https://baseswap.fi/', name: 'BaseSwap' }
    ],
    defi: [
    ],
  }
}

export default base
