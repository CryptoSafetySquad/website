import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import arbitrum from '../../data/blockchains/layer2eth/arbitrum'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'ArbiScan', link: 'https://arbiscan.io/', },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    exchanges.apollox,
  ],
  defi: [
    defi.yieldwolf,
  ],
  protocols: [],
  nftMarketplaces: [
    marketplaces.alphaShares,
  ],
  riskyProjects: [],
  wallets: []
}

const Arbitrum: NextPage = () => {
  return <EcosystemPage
    {...arbitrum}
  />
}

export default Arbitrum
