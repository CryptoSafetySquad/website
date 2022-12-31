interface Project {
  bannerImage?: string;
  slug?: string;
  type: string;
  blockchain?: Blockchains | Blockchains[] | string;
  name: string;
  opensea?: string;
  twitter?: string;
  website?: string;
}

enum Blockchains {
  Ethereum = 'Ethereum',
  Avalanche = 'Avalanche',
  Binance = 'Binance',
  Polygon = 'Polygon', // ETH L2
}

export const AceMinersNFT: Project = {
  name: 'Ace Miners NFT',
  slug: 'aceminers',
  type: 'NFT: Utility, Passive Income',
  blockchain: 'Ethereum',
  bannerImage: 'https://i.seadn.io/gcs/files/f59537bf481f49ad3d97a8de0ac164d0.png?auto=format&w=1920',
  website: 'https://aceminersnft.io/',
  opensea: 'https://opensea.io/collection/aceminersnft',
}

export const BoredApeYachtClub: Project = {
  name: 'Bored Ape Yacht Club',
  blockchain: Blockchains.Ethereum,
  // slug: 'boredapeyachtclub', // disable slug while page has no material content
  opensea: 'https://opensea.io/collection/boredapeyachtclub',
  type: 'NFT: Utility',
  website: 'https://boredapeyachtclub.com/',
  bannerImage: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920',
  twitter: 'BoredApeYC'
}

export const HydroWhalesMiningClub: Project = {
  name: 'Hydro Whales Mining Club',
  slug: 'hydro-whales',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  bannerImage: 'https://i.seadn.io/gae/rgToigCSJptmZH_aXssvgDJ7JLtSL0QqjfncgOgoNwjaZxOeS7qD5p6CB1Pdp1P3cUlouqnfQUCe2_ux_lljAc1GcVSLhBueuuelSnY?auto=format&w=1920',
  opensea: 'https://opensea.io/collection/hydro-whales-mining-club-official',
  twitter: 'HydroWhalesClub',
  website: 'https://www.hydrowhalesclub.com/'
}

export const OceanMoney: Project = {
  name: 'Ocean Money',
  slug: 'ocean-money',
  type: 'Banking Services, Crypto Services',
  website: 'https://www.ocean.money/',
  bannerImage: 'https://www.ocean.money/_next/image?url=%2Fimages%2Fblog-1.png&w=1920&q=75',
  twitter: 'OceanMoney_'
}

export const OMNIBirds: Project = {
  name: 'OMNI Birds',
  slug: 'omnibirds',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  opensea: 'https://opensea.io/collection/omnibirds-official',
  website: 'https://www.omnibirds.com/',
  bannerImage: 'https://i.seadn.io/gcs/files/e66305d2587c0ea7e29d7c1c1cd3cae5.png?auto=format&w=1920',
  twitter: 'OMNIBirds'
}

export const Project79: Project = {
  name: 'Project 79',
  slug: 'project79',
  type: 'Passive Income',
  blockchain: [Blockchains.Ethereum, Blockchains.Binance],
  bannerImage: 'https://pbs.twimg.com/media/FdBHe8kaMAEk8_2?format=jpg&name=4096x4096'
}

export const StableFund: Project = {
  name: 'StableFund',
  slug: 'stablefund',
  type: 'Passive Income',
  blockchain: Blockchains.Polygon
}

export const DRIP: Project = {
  name: 'DRIP',
  slug: 'drip',
  type: 'Passive Income',
  blockchain: Blockchains.Binance
}

const projects = {
  bluechip: [
    AceMinersNFT,
    BoredApeYachtClub,
    HydroWhalesMiningClub,
    OceanMoney,
    Project79,
  ],
  average: [
    OMNIBirds,
  ],
  risky: [
    DRIP
  ],
  rugpulled: [
    StableFund
  ]
}

export default projects
