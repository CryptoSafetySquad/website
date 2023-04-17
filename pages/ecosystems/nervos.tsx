import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import nervos from '../../data/blockchains/nervos'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { link: 'https://explorer.nervos.org/', name: 'Nervos Explorer' }
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [],
  defi: [],
  protocols: [],
  nftMarketplaces: [],
  riskyProjects: [],
  wallets: [
  ]
}

const metadata = {
  website: 'https://www.nervos.org/',
  token: {
    name: 'CKB',
    cmc: 'https://coinmarketcap.com/currencies/nervos-network/'
  }
}

const Nervos: NextPage = () => {
  return <EcosystemPage
    {...nervos}
    data={data} name='Nervos'
  />
}

export default Nervos
