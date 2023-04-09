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

const Binance: NextPage = () => {
  return <EcosystemPage name='Binance' slug='binance' data={data} />
}

export default Binance
