import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'BscScan', link: 'https://bscscan.com/', },
  ],
  centralisedExchanges: [],
  decentralisedExchanges: [],
  defi: [],
  protocols: [
    { name: 'EMP Money', link: 'https://emp.money/' },
  ],
  nftMarketplaces: [
  ],
  riskyProjects: [
    { name: 'DRIP', link: 'https://drip.community/' },
  ]
}

data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.decentralisedExchanges.push(exchanges.uniswap)
data.decentralisedExchanges.push(exchanges.pancakeswap)
data.decentralisedExchanges.push(exchanges.apeswap)
data.decentralisedExchanges.push({ name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' })
data.decentralisedExchanges.push({ name: 'Thena', link: 'https://thena.fi/' })
data.nftMarketplaces.push(marketplaces.alphaShares)
data.defi.push(defi.autofarm)
data.defi.push(defi.beefy)
data.defi.push(defi.magik)
data.defi.push(defi.yieldwolf)
data.defi.push(defi.dexVaults)

const Binance: NextPage = () => {
  return <EcosystemPage name='Binance' slug='binance' data={data} />
}

export default Binance
