import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
  ],
  defi: [
    defi.dexVaults,
  ],
  centralisedExchanges: [
    // exchanges.kucoin,
    // exchanges.gateio,
  ],
  // decentralisedExchanges: [],
  wallets: [
    // wallets.trustwallet,
    // wallets.cakewallet,
    // wallets.unstoppable,
    // wallets.exodus,
  ],
}

const metadata = {
  token: {
    name: 'CANTO',
    cmc: 'https://coinmarketcap.com/currencies/canto/'
  }
}

const Canto: NextPage = () => {
  return <EcosystemPage name='Canto' data={data} metadata={metadata} />
}

export default Canto
