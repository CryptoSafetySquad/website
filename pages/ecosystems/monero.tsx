import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'
import monero from '../../data/blockchains/monero'

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

const Monero: NextPage = () => {
  return <EcosystemPage
    {...monero}
  />
}

export default Monero
