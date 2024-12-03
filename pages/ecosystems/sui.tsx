import type { NextPage } from 'next'

import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import wallets from '../../data/wallets'
import sui from '../../data/blockchains/sui'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
//    { name: 'Solana Explorer', link: 'https://explorer.solana.com/', },
//    { name: 'SolScan', link: 'https://solscan.io/', },
  ],
  centralisedExchanges: [
  ],
  // decentralisedExchanges: [],
  // defi: [],
  // protocols: [],
  nftMarketplaces: [
  ],
  // riskyProjects: [],
  wallets: [
  ]
}

const Sui: NextPage = () => {
  return <EcosystemPage
    {...sui}
  />
}

export default Sui
