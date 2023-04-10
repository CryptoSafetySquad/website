import type { NextPage } from 'next'

import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Solana Explorer', link: 'https://explorer.solana.com/', },
    { name: 'SolScan', link: 'https://solscan.io/', },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio
  ],
  // decentralisedExchanges: [],
  // defi: [],
  // protocols: [],
  nftMarketplaces: [
    marketplaces.magiceden
  ],
  // riskyProjects: [],
  wallets: [
    wallets.phantom,
    wallets.exodus,
  ]
}

const metadata = {
  token: {
    name: 'SOL',
    cmc: 'https://coinmarketcap.com/currencies/solana/',
  }
}

const Solana: NextPage = () => {
  return <EcosystemPage
    name='Solana'
    slug='solana'
    data={data}
    metadata={metadata}
  />
}

export default Solana
