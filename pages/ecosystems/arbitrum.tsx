import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'ArbiScan', link: 'https://arbiscan.io/', },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [],
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
  return <EcosystemPage data={data} name='Arbitrum' slug='arbitrum' />
}

export default Arbitrum
