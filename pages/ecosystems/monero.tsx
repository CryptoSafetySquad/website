import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  centralisedExchanges: [],
  decentralisedExchanges: [],
  wallets: [],
}
data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.wallets.push(wallets.cakewallet)

const Monero: NextPage = () => {
  return <EcosystemPage name='Monero' slug='monero' data={data} />
}

export default Monero
