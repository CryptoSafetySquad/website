import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'mempool.space', link: 'https://mempool.space/' },
    { name: 'Blockchain.com Explorer', link: 'https://www.blockchain.com/explorer' },
  ],
  centralisedExchanges: [],
  // decentralisedExchanges: [],
}
data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)

const Bitcoin: NextPage = () => {
  return <EcosystemPage name='Bitcoin' slug='bitcoin' data={data} />
}

export default Bitcoin
