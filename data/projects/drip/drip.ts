import type { Project } from "../../../types/project"
import Blockchains from "../../../enums/blockchains"
import warnings from "./warnings"
import ProjectStatus from "../../../enums/ProjectStatus"

export const DRIP: Project = {
  name: 'DRIP',
  slug: 'drip',
  type: 'Passive Income',
  status: ProjectStatus.Risky,
  blockchain: Blockchains.Binance,
  tokens: [
    {
      name: 'DRIP Token',
      contract: '0x20f663cea80face82acdfa3aae6862d246ce0333',
      short: '0x20...0333',
      explorerUrl: 'https://bscscan.com/address/0x20f663cea80face82acdfa3aae6862d246ce0333',
      blockchain: 'BSC'
    }
  ],
  redflags: [
    'Undoxxed',
  ],
  warnings,
  domains: [
    'drip.community',
  ]
}

export default DRIP
