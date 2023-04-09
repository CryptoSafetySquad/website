import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Etherscan', link: 'https://etherscan.io' }
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    exchanges.uniswap,
    exchanges.pancakeswap,
    exchanges.apeswap,
  ],
  defi: [
    defi.beefy
  ],
  nftMarketplaces: [
    marketplaces.alphaShares,
    marketplaces.opensea,
    marketplaces.x2y2,
    marketplaces.magiceden,
    marketplaces.blur,
  ],
  // protocols: [],
  // riskyProjects: [],
  wallets: [
    wallets.metamask,
    wallets.trustwallet,
    wallets.rabby,
  ],
}

const metadata = {
  token: {
    name: 'ETH',
    cmc: 'https://coinmarketcap.com/currencies/ethereum/'
  }
}

const Ethereum: NextPage = () => {
  return <EcosystemPage
    name='Ethereum'
    metadata={metadata}
    data={data}
  />
}

export default Ethereum
