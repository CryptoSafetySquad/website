import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'
import wallets from '../../data/wallets'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import fantom from '../../data/blockchains/fantom'

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

const Fantom: NextPage = () => {
  return <EcosystemPage data={data} {...fantom} />
}

export default Fantom
