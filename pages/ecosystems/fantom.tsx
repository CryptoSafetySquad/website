import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'FTMScan', link: 'https://ftmscan.com/' },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    { name: 'SpookySwap', link: 'https://spooky.fi/#/' },
    { name: 'SpiritSwap', link: 'https://swap.spiritswap.finance/' },
  ],
  defi: [
    defi.beefy,
    defi.dexVaults,
  ],
  wallets: [
    wallets.trustwallet,
  ],
  nftMarketplaces: [
    marketplaces.alphaShares,
  ]
}

const metadata = {
  token: {
    name: 'FTM',
    cmc: 'https://coinmarketcap.com/currencies/fantom/',
  }
}

const Fantom: NextPage = () => {
  return <EcosystemPage name='Fantom' data={data} metadata={metadata} />
}

export default Fantom
