import type { NextPage } from 'next'
import type { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'

import optimism from '../../data/blockchains/layer2eth/optimism'

const Optimism: NextPage = () => {
  return <EcosystemPage
    {...optimism}
  />
}

export default Optimism
