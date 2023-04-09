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
  centralisedExchanges: [],
  // decentralisedExchanges: [],
  wallets: [],
}
data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.wallets.push(wallets.trustwallet)
data.wallets.push(wallets.unstoppable)
data.wallets.push(wallets.cakewallet)

const Bitcoin: NextPage = () => {
  return <EcosystemPage name='Bitcoin' slug='bitcoin' data={data} />
}

export default Bitcoin
