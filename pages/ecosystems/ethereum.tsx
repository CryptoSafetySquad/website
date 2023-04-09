import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import EcosystemPage from '../../Components/EcosystemPage'

import exchanges from '../../data/exchanges'
import marketplaces from '../../data/marketplaces'
import defi from '../../data/defi'
import wallets from '../../data/wallets'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Etherscan', link: 'https://etherscan.io' }
  ],
  centralisedExchanges: [],
  decentralisedExchanges: [],
  defi: [
  ],
  nftMarketplaces: [],
  // protocols: [],
  // riskyProjects: [],
  wallets: [],
}

data.centralisedExchanges.push(exchanges.kucoin)
data.centralisedExchanges.push(exchanges.gateio)
data.decentralisedExchanges.push(exchanges.uniswap)
data.decentralisedExchanges.push(exchanges.pancakeswap)
data.decentralisedExchanges.push(exchanges.apeswap)
data.nftMarketplaces.push(marketplaces.alphaShares)
data.nftMarketplaces.push(marketplaces.opensea)
data.nftMarketplaces.push(marketplaces.x2y2)
data.nftMarketplaces.push(marketplaces.magiceden)
data.nftMarketplaces.push(marketplaces.blur)
data.defi.push(defi.beefy)
data.wallets.push(wallets.metamask)
data.wallets.push(wallets.trustwallet)
data.wallets.push(wallets.rabby)

const Ethereum: NextPage = () => {
  return <EcosystemPage name='Ethereum' slug='ethereum' data={data} />
}

export default Ethereum
