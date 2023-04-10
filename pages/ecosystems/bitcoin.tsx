import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'mempool.space', link: 'https://mempool.space/' },
    { name: 'Blockchain.com Explorer', link: 'https://www.blockchain.com/explorer' },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  // decentralisedExchanges: [],
  wallets: [
    wallets.trustwallet,
    wallets.cakewallet,
    wallets.unstoppable,
    wallets.exodus,
  ],
}

const metadata = {
  token: {
    name: 'BTC',
    cmc: 'https://coinmarketcap.com/currencies/bitcoin/',
  }
}

const Bitcoin: NextPage = () => {
  return <EcosystemPage
    name='Bitcoin'
    slug='bitcoin'
    data={data}
    metadata={metadata}
  />
}

export default Bitcoin
