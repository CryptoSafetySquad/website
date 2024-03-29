import type { NextPage } from 'next'

import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import wallets from '../../data/wallets'
import solana from '../../data/blockchains/solana'

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

const Solana: NextPage = () => {
  return <EcosystemPage
    {...solana}
  />
}

export default Solana
