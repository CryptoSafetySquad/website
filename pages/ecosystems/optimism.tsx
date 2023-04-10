import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { link: 'https://optimistic.etherscan.io/', name: 'Optimism Explorer (Etherscan)' }
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
  nftMarketplaces: [],
  riskyProjects: [],
  wallets: [
  ]
}

const metadata = {
  token: {
    name: 'OP',
    cmc: 'https://coinmarketcap.com/currencies/optimism-ethereum/'
  }
}

const Optimism: NextPage = () => {
  return <EcosystemPage
    name='Optimism'
    metadata={metadata}
    data={data}
  />
}

export default Optimism
