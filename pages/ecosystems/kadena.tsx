import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

import exchanges from '../../data/exchanges'
import defi from '../../data/defi'
import wallets from '../../data/wallets'
import marketplaces from '../../data/marketplaces'
import EcosystemPage from '../../Components/EcosystemPage'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: 'Kadena Block Explorer', link: 'https://explorer.chainweb.com/mainnet' },
  ],
  centralisedExchanges: [
    exchanges.kucoin,
    exchanges.gateio,
  ],
  decentralisedExchanges: [
    { name: 'Kaddex', link: 'https://swap.kaddex.com/' },
    { name: 'KDSwap', link: 'https://www.kdswap.exchange/' },
  ],
  defi: [
    // defi.beefy,
    // defi.dexVaults,
  ],
  wallets: [
    // wallets.trustwallet,
  ],
  nftMarketplaces: [
    // marketplaces.alphaShares,
  ],
  protocols: [
    { name: 'Kadena Mining Club', link: 'https://kdamining.club/' },
    { name: 'KadenaHashing', link: 'https://kadenahashing.com/' },
  ],
  launchpads: [
    { name: 'Hypercent', link: 'https://hypercent.io/' },
    { name: 'KDLaunch', link: 'https://www.kdlaunch.com/' },
    { name: 'Tokensoft', link: 'https://www.tokensoft.io/' },
  ],
  gaming: [
    { name: 'UFO Gaming', link: 'https://ufogaming.io/' }
  ]
}

const metadata = {
  token: {
    name: 'KDA',
    cmc: 'https://coinmarketcap.com/currencies/kadena/',
  },
  website: 'https://kadena.io/'
}

const Kadena: NextPage = () => {
  return <EcosystemPage
    name='Kadena'
    data={data}
    metadata={metadata}
  />
}

export default Kadena
