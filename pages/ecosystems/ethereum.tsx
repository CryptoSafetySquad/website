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
    exchanges.apollox,
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
  },
  website: 'https://ethereum.org'
}

const Ethereum: NextPage = () => {
  return <EcosystemPage
    name='Ethereum'
    metadata={metadata}
    data={data}
    icon='/images/logos/eth-diamond-purple.png'
    iconSize={{w: 28, h:40}}
  />
}

export default Ethereum
