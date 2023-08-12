import type { BlockchainData } from "../../../types/BlockchainData"

const polygon: BlockchainData = {
  icon: '/images/logos/polygon.png',
  name: 'Polygon',
  slug: 'polygon',
  metadata: {
    website: 'https://polygon.technology/',
    token: {
      name: 'MATIC',
      cmc: 'https://coinmarketcap.com/currencies/polygon/'
    }
  },
  communityVideos: [
    { youtubeSlug: 'JCcSVCeYIS4', date: '31/03/2023', dateISO: '2023-03-31', title: 'Polygon zkEVM Explained for Dummies (vs Arbitrum & Optimistic Rollups)' }
  ]
}

export default polygon
