import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    { link: 'https://lattice.is/dashboard', name: 'Lattice' },
  ],
  defi: [],
  protocols: [],
  nftMarketplaces: [],
  riskyProjects: [],
  wallets: [
    { link: 'https://constellationnetwork.io/stargazer-wallet', name: 'Stargazer' }
  ]
}

const metadata = {
  website: 'https://constellationnetwork.io/',
  token: {
    name: 'DAG',
    cmc: 'https://coinmarketcap.com/currencies/constellation/'
  }
}

const Constellation: NextPage = () => {
  return <EcosystemPage
    name='Constellation'
    metadata={metadata}
    data={data}
  />
}

export default Constellation
