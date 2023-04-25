import type { Project } from "../../../types/project"
import Blockchains from "../../../enums/blockchains"
import news from "./news"
import ProjectStatus from "../../../enums/ProjectStatus"

export const YieldRobot: Project = {
  name: 'YieldRobot',
  slug: 'yieldrobot',
  type: 'Passive Income',
  status: ProjectStatus.RugPulled,
  blockchain: Blockchains.Binance,
  contracts: [
    { name: 'YieldRobot', explorerUrl: 'https://bscscan.com/address/0xb8CDa6AE6D005d56205B29797ADD341c85e59608', contract: '0xb8CDa6AE6D005d56205B29797ADD341c85e59608', short: '0xb8...9608', blockchain: 'BSC' }
  ],
  news,
  domains: [
    'yieldrobot.app'
  ],
  redflags: [
    'Team not doxxed!',
    'Unrealistic long-term daily rewards',
    (<>3% &quot;Development Fee&quot; (tax) - Very common in ponzi schemes</>),
    '8% referral bonus, build ponzi scheme faster!',
    (<>Quote: &quot;We are not worried about KYC, we are worried about regulations.&quot;</>),
    (<>&quot;Audit&quot; from watchdogs may be seen as misleading (subjective).</>),
  ],
  greenflags: [
    'Contract code is fully published'
  ]
}

export default YieldRobot
