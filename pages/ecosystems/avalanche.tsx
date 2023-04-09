import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Snowtrace', link: 'https://snowtrace.io/', },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    { name: 'TraderJoe', link: 'https://traderjoexyz.com/' }
  ],
  defi: [
    defi.yieldwolf,
  ],
  protocols: [
    { link: 'https://grapefinance.app/', name: 'Grape Finance'  }
  ],
  nftMarketplaces: [
    marketplaces.alphaShares,
  ],
  riskyProjects: [],
  wallets: []
}

const Avalanche: NextPage = () => {
  return <EcosystemPage name='Avalanche' slug='avalanche' data={data} />
}

export default Avalanche
