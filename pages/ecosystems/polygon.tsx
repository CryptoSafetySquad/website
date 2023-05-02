import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import defi from '../../data/defi'
import marketplaces from '../../data/marketplaces'
import polygon from '../../data/blockchains/layer2eth/polygon'
import wallets from '../../data/wallets'

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
    defi.beefy,
  ],
  // protocols: [],
  nftMarketplaces: [
    marketplaces.alphaShares,
    marketplaces.magiceden,
  ],
  // riskyProjects: [],
  wallets: [
    wallets.trustwallet,
    wallets.metamask,
    wallets.exodus,
  ]
}

const Polygon: NextPage = () => {
  return <EcosystemPage
    {...polygon}
    data={data}
  />
}

export default Polygon
