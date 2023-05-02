import type { Project } from "../../../types/project"
import { Blockchains } from "../../../enums/blockchains"

import earnings from "./earnings"
import news from "./news"
import answers from "./answers"
import { officialVideos, communityVideos } from "./videos"

export const HydroWhalesMiningClub: Project = {
  name: 'Hydro Whales Mining Club',
  slug: 'hydro-whales',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  bannerImage: 'https://i.seadn.io/gae/rgToigCSJptmZH_aXssvgDJ7JLtSL0QqjfncgOgoNwjaZxOeS7qD5p6CB1Pdp1P3cUlouqnfQUCe2_ux_lljAc1GcVSLhBueuuelSnY?auto=format&w=1920',
  opensea: 'https://opensea.io/collection/hydro-whales-mining-club-official',
  twitter: 'HydroWhalesClub',
  website: 'https://www.hydrowhalesclub.com/',
  wallets: [
    { name: 'Community Wallet', contract: '0x3f85C11A8Db617E9a78c75Bdb12919D1F0a092ec', explorerUrl: 'https://www.blockchain.com/explorer/addresses/eth/0x3f85C11A8Db617E9a78c75Bdb12919D1F0a092ec', short: '0x3f...92ec', blockchain: 'Ethereum' },
    { name: 'Project Development', contract: '0xa8c1B1a70bBFF30449A932aB238f95AaA1b33a03', explorerUrl: 'https://www.blockchain.com/explorer/addresses/eth/0xa8c1B1a70bBFF30449A932aB238f95AaA1b33a03', short: '0xa8...3a03', blockchain: 'Ethereum' },
    { name: 'Bitcoin Miner Wallet', contract: 'bc1qty4mw7fjg5pwqvshwfp5jytckqj6n7k8w8xzm4', explorerUrl: 'https://blockchair.com/bitcoin/address/bc1qty4mw7fjg5pwqvshwfp5jytckqj6n7k8w8xzm4', short: 'bc1q...xzm4', blockchain: 'Ethereum' },

  ],
  nfts: [
    { name: 'Hydro Whales Mining Club', contract: '0xba72b008d53d3e65f6641e1d63376be2f9c1ad05', explorerUrl: 'https://etherscan.io/address/0xba72b008d53d3e65f6641e1d63376be2f9c1ad05', short: '0xba...ad05', blockchain: 'Ethereum' },
  ],
  earnings,
  officialVideos,
  communityVideos,
  answers,
  news,
  relatedProjects: [
    { name: 'Project 79', link: 'project79', desc: 'Gold Mining' },
    { name: 'Ocean Money', link: 'ocean-money', desc: 'Banking and Crypto' }
  ],
  team: [
    { name: 'Sam Pitman', twitter: 'https://twitter.com/_sampitman', linkedin: 'https://www.linkedin.com/in/sam-pitman-3b5959138/' },
    { name: 'Adam Dignan', linkedin: 'https://www.linkedin.com/in/adam-dignan-b7985418b/' },
    { name: 'Adam Javaid', linkedin: 'https://www.linkedin.com/in/adam-javaid-511397161/' },
    { name: 'Anderson Arokium', linkedin: 'https://www.linkedin.com/in/andersonarokium/' },
  ]
}

export default HydroWhalesMiningClub
