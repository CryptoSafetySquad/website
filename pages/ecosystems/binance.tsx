import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import exchanges from '../../data/exchanges'



const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'BscScan', link: '', },
  ],
  centralisedExchanges: [],
  decentralisedExchanges: [],
  defi: [
    { name: 'Beefy', link: 'https://app.beefy.com/' },
    { name: 'Magik', link: 'https://magik.farm/#/bsc' },
    { name: 'Autofarm', link: 'https://autofarm.network/' },
    { name: 'YieldWolf', link: 'https://yieldwolf.finance/' },
    { name: 'dexVaults+', link: 'https://dexvaults.com/' },
  ],
  protocols: [
    { name: 'EMP Money', link: 'https://emp.money/' },
  ],
  nftMarketplaces: [
    { name: 'Alpha Shares', link: 'https://www.alphashares.io/' },
  ],
  riskyProjects: [
    { name: 'DRIP', link: 'https://drip.community/' },
  ]
}

data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.decentralisedExchanges.push(exchanges.uniswap)
data.decentralisedExchanges.push(exchanges.pancakeswap)
data.decentralisedExchanges.push({ name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' })
data.decentralisedExchanges.push({ name: 'ApeSwap', link: 'https://apeswap.finance/' })
data.decentralisedExchanges.push({ name: 'Thena', link: 'https://thena.fi/' })

const Binance: NextPage = () => {
  return <EcosystemPage name='Binance' slug='binance' data={data} />
}

export default Binance
