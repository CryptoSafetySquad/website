import type { Project } from "../../../types/project"
import { Blockchains } from "../../../enums/blockchains"

// import earnings from "./earnings"
import news from "./news"
// import answers from "./answers"
import { officialVideos, communityVideos } from "./videos"

export const EMPMoney: Project = {
  name: 'EMP Money',
  slug: 'empmoney',
  type: 'Protocol',
  blockchain: Blockchains.Binance,
  bannerImage: 'https://pbs.twimg.com/profile_images/1556112831032037376/g-XdTo52_400x400.jpg',
  tokens: [
    { name: 'EMP', contract: '0x3b248cefa87f836a4e6f6d6c9b42991b88dc1d58', blockchain: 'BSC', short: '0x3b...1d58', explorerUrl: 'https://bscscan.com/token/0x3b248cefa87f836a4e6f6d6c9b42991b88dc1d58' },
    { name: 'ESHARE', contract: '0xDB20F6A8665432CE895D724b417f77EcAC956550', blockchain: 'BSC', short: '0xDB...6550', explorerUrl: 'https://bscscan.com/token/0xDB20F6A8665432CE895D724b417f77EcAC956550' }
  ],
  contracts: [
    { name: 'EMP Detonator', contract: '0xa9ea52d60111073e34fad966c03f70684e5b205d', blockchain: 'BSC', short: '0xa9...205d', explorerUrl: 'https://bscscan.com/address/0xa9ea52d60111073e34fad966c03f70684e5b205d' },
    { name: 'EMP Detonator Defender Claim', contract: '0x53d1eed48bb9de30e268bc6d7bfb7665e097d3c3', blockchain: 'BSC', short: '0x53...d3c3', explorerUrl: 'https://bscscan.com/address/0x53d1eed48bb9de30e268bc6d7bfb7665e097d3c3' },
    { name: 'EMP Sentinel Squadron Claim', contract: '0x693c755d752c22920f20df4166e6067ada53ea5a', blockchain: 'BSC', short: '0x69...ea5a', explorerUrl: 'https://bscscan.com/address/0x693c755d752c22920f20df4166e6067ada53ea5a' },
  ],
  nfts: [
    { name: 'Sentinel Squadron NFT', contract: '0xd689af61148cb91e286d0d4e92d67120e35c37b8', blockchain: 'BSC', short: '0xd6...37b8', explorerUrl: 'https://bscscan.com/address/0xd689af61148cb91e286d0d4e92d67120e35c37b8' },
    { name: 'Detonator Defender NFT', contract: '0x6df246a1e0064169518da5d1e1905e37410e8694', blockchain: 'BSC', short: '0x6d...8694', explorerUrl: 'https://bscscan.com/address/0x6df246a1e0064169518da5d1e1905e37410e8694' },
  ],
  news,
  officialVideos,
  communityVideos
}

export default EMPMoney
