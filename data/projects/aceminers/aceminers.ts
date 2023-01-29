import type { Project } from "../../../types/project"
import { Blockchains } from "../../../enums/blockchains"

export const AceMinersNFT: Project = {
  name: 'Ace Miners NFT',
  slug: 'aceminers',
  type: 'NFT: Utility, Passive Income',
  blockchain: Blockchains.Ethereum,
  bannerImage: 'https://i.seadn.io/gcs/files/f59537bf481f49ad3d97a8de0ac164d0.png?auto=format&w=1920',
  website: 'https://aceminersnft.io/',
  opensea: 'https://opensea.io/collection/aceminersnft',
  nfts: [
    { name: 'AceMiners NFT', explorerUrl: 'https://etherscan.io/address/0x0770a317af574fba15f205a60bca9075206ad0a8', short: '0x07...d0a8', contract: '0x0770a317af574fba15f205a60bca9075206ad0a8' },
    { name: 'AceMiners Phase 2 NFT', explorerUrl: 'https://etherscan.io/address/0xe635bd48f69276d6f52cc2e577e5ddeccf16b79c', short: '0xe6...b79c', contract: '0xe635bd48f69276d6f52cc2e577e5ddeccf16b79c' },
  ]
}

export default AceMinersNFT
