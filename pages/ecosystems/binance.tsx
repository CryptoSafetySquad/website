import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import EcosystemPage from '../../Components/EcosystemPage'

const data = {
  explorers: [
    { name: 'BscScan', link: '', },
  ],
  centralisedExchanges: [
    { name: 'KuCoin', link: 'https://www.kucoin.com/r/rf/rJQQK1S' },
    { name: 'Gate.io', link: 'https://www.gate.io/signup/11213076' },
  ],
  decentralisedExchanges: [
    { name: 'UniSwap', link: 'https://app.uniswap.org/' },
    { name: 'PancakeSwap', link: 'https://pancakeswap.finance/' },
    { name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' },
    { name: 'ApeSwap', link: 'https://apeswap.finance/' },
    { name: 'Thena', link: 'https://thena.fi/' }
  ],
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

const Binance: NextPage = () => {
  return <EcosystemPage name='Binance' slug='binance' data={data} />
}

export default Binance
