import type { BlockchainData } from "../../types/BlockchainData"

import exchanges from "../exchanges"
import marketplaces from "../marketplaces"
import wallets from "../wallets"

const solana: BlockchainData = {
  icon: '/images/icons/blockchains/solana.svg',
  name: 'Solana',
  slug: 'solana',
  metadata: {
    website: 'https://solana.com/',
    token: {
      name: 'SOL',
      cmc: 'https://coinmarketcap.com/currencies/solana/',
    }
  },
  data: {
    explorers: [
      { name: 'Solana Explorer', link: 'https://explorer.solana.com/', },
      { name: 'SolScan', link: 'https://solscan.io/', },
    ],
    centralisedExchanges: [
      exchanges.kucoin,
      exchanges.gateio,
      exchanges.coinbase,
      exchanges.binance,
    ],
    nftMarketplaces: [
      marketplaces.magiceden
    ],
    wallets: [
      wallets.phantom,
      wallets.exodus,
    ],
    defi: [
      { name: 'Orca', link: 'https://www.orca.so/' },
      { name: 'Raydium', link: 'https://raydium.io/' }
    ]
  }
}

export default solana
