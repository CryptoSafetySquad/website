import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import defi from "../defi"
import marketplaces from "../marketplaces"
import wallets from "../wallets"

import HydroWhalesMiningClub from "../projects/hydrowhales/hydrowhales"
import AceMinersNFT from "../projects/aceminers/aceminers"
import Project79 from "../projects/project79/project79"

const ethereum: BlockchainData = {
  icon: '/images/logos/eth-diamond-purple.png',
  name: 'Ethereum',
  slug: 'ethereum',
  iconRatio: { y: 1, x: 0.8 },
  metadata: {
    token: {
      name: 'ETH',
      cmc: 'https://coinmarketcap.com/currencies/ethereum/'
    },
    website: 'https://ethereum.org'
  },
  data: {
    explorers: [
      { name: 'Etherscan', link: 'https://etherscan.io' }
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
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
    nftProjects: [
      HydroWhalesMiningClub,
      AceMinersNFT,
      Project79,
    ],
    // protocols: [],
    // riskyProjects: [],
    wallets: [
      wallets.metamask,
      wallets.trustwallet,
      wallets.rabby,
    ],
  }
}

export default ethereum
