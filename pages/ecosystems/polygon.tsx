import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'
import defi from '../../data/defi'
import marketplaces from '../../data/marketplaces'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { link: 'https://polygonscan.com/', name: 'PolygonScan' }
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    exchanges.apeswap,
    exchanges.uniswap,
    exchanges.quickswap,
  ],
  defi: [
    defi.yieldwolf,
    defi.magik,
  ],
  protocols: [],
  nftMarketplaces: [
    marketplaces.alphaShares,
    marketplaces.magiceden,
  ],
  riskyProjects: [],
  wallets: [
  ]
}

const metadata = {
  website: 'https://polygon.technology/',
  token: {
    name: 'MATIC',
    cmc: 'https://coinmarketcap.com/currencies/polygon/'
  }
}

const Polygon: NextPage = () => {
  return <EcosystemPage
    name='Polygon'
    data={data}
    metadata={metadata}
  />
}

export default Polygon
