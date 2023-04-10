import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [],
  wallets: [
    wallets.cakewallet
  ],
}

const metadata = {
  website: 'https://www.getmonero.org/',
  token: {
    name: 'XMR',
    cmc: 'https://coinmarketcap.com/currencies/monero/'
  }
}

const Monero: NextPage = () => {
  return <EcosystemPage
    name='Monero'
    slug='monero'
    metadata={metadata}
    data={data}
  />
}

export default Monero
