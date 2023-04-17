import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'BscScan', link: 'https://bscscan.com/', },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    exchanges.uniswap,
    exchanges.pancakeswap,
    exchanges.apeswap,
    exchanges.apollox,
    { name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' },
    { name: 'Thena', link: 'https://thena.fi/' },
  ],
  defi: [
    defi.autofarm,
    defi.beefy,
    defi.magik,
    defi.yieldwolf,
    defi.dexVaults,
  ],
  protocols: [
    { name: 'EMP Money', link: 'https://emp.money/' },
    { name: 'MDB (Make Defi Better)', link: 'https://www.mdb.fund/' },
  ],
  nftMarketplaces: [
    marketplaces.alphaShares,
  ],
  riskyProjects: [
    { name: 'DRIP', link: 'https://drip.community/' },
  ],
  wallets: [
    wallets.exodus,
    wallets.rabby,
    wallets.trustwallet,
    wallets.metamask,
  ]
}

const metadata = {
  website: 'https://www.bnbchain.org/',
  icon: '/images/icons/brand/binance.svg',
  token: {
    name: 'BNB',
    cmc: 'https://coinmarketcap.com/currencies/bnb/'
  }
}

const Binance: NextPage = () => {
  return <EcosystemPage
    name='BNB Chain (aka BSC [Binance Smart Chain])'
    slug='binance'
    data={data}
    metadata={metadata}
    icon={metadata.icon}
  />
}

export default Binance
