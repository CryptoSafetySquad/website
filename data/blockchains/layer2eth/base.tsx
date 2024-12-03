import type { BlockchainData } from "../../../types/BlockchainData"

import exchanges from "../../exchanges"
import defi from "../../defi"
import marketplaces from "../../marketplaces"

const base: BlockchainData = {
  name: 'Base',
  slug: 'base',
  // icon: '/images/icons/blockchains/optimism.png',
  iconSize: { w: 24, h: 24 },
  metadata: {
    // website: '',
    // token: {
    //   // name: 'OP',
    //   // cmc: ''
    // }
  },
  data: {
    explorers: [
      { link: 'https://basescan.org/', name: 'BaseScan (Etherscan)' }
    ],
    centralisedExchanges: [],
    decentralisedExchanges: [
      { link: 'https://aerodrome.finance/', name: 'Aerodrome' },
      { link: 'https://base.velocimeter.xyz/home', name: 'BVM Velocimeter' },
      { link: 'https://app.alienbase.xyz/', name: 'Alien Base' },
      { link: 'https://baseswap.fi/', name: 'BaseSwap' },
      exchanges.sushi,
    ],
    defi: [],
    nftMarketplaces: [
      marketplaces.magiceden
    ]
  }
}

export default base
