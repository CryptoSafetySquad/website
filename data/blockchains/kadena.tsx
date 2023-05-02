import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"

const kadena: BlockchainData = {
  name: 'Kadena',
  slug: 'kadena',
  icon: '/images/icons/blockchains/kadena.png',
  metadata: {
    token: {
      name: 'KDA',
      cmc: 'https://coinmarketcap.com/currencies/kadena/',
    },
    website: 'https://kadena.io/'
  },
  data: {
    explorers: [
      { name: 'Kadena Block Explorer', link: 'https://explorer.chainweb.com/mainnet' },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
    ],
    decentralisedExchanges: [
      { name: 'Kaddex', link: 'https://swap.kaddex.com/' },
      { name: 'KDSwap', link: 'https://www.kdswap.exchange/' },
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
}

export default kadena
