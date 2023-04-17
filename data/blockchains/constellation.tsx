import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const constellation: BlockchainData = {
  icon: '/images/icons/blockchains/constellation.svg',
  name: 'Constellation',
  slug: 'constellation',
  metadata: {
    website: 'https://constellationnetwork.io/',
    token: {
      name: 'DAG',
      cmc: 'https://coinmarketcap.com/currencies/constellation/'
    }
  },
  data: {
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
    ],
    decentralisedExchanges: [
      { link: 'https://lattice.is/dashboard', name: 'Lattice' },
    ],
    wallets: [
      { link: 'https://constellationnetwork.io/stargazer-wallet', name: 'Stargazer' }
    ]
  }
}

export default constellation
