import type { BlockchainData } from "../../types/BlockchainData"

const layer1x: BlockchainData = {
  // icon: '/images/icons/blockchains/fantom.png',
  name: 'Layer One X',
  slug: 'layer1x',
  iconSize: {
    w: 24,
    h: 24,
  },
  metadata: {
    website: 'https://www.l1x.foundation/',
    token: {
      name: 'L1X',
      // cmc: 'https://coinmarketcap.com/currencies/',
    }
  },
  data: {
    explorers: [
      // { name: 'FTMScan', link: 'https://ftmscan.com/' },
    ],
    decentralisedExchanges: [
      { name: 'L1Dex', link: 'https://www.l1dex.com/' },
    ],
  }
}

export default layer1x
