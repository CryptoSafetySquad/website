import type { NextPage } from 'next'

import { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Solana Explorer', link: 'https://explorer.solana.com/', },
    { name: 'Solscan', link: 'https://solscan.io/', },
  ],
  centralisedExchanges: [],
  // decentralisedExchanges: [],
  // defi: [],
  // protocols: [],
  nftMarketplaces: [],
  // riskyProjects: [],
  // wallets: []
}

data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.nftMarketplaces.push(marketplaces.magiceden)

const Solana: NextPage = () => {
  return <EcosystemPage name='Solana' slug='solana' data={data} />
}

export default Solana
