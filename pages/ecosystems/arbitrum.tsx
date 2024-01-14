import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import EcosystemPage from '../../Components/EcosystemPage'
import arbitrum from '../../data/blockchains/layer2eth/arbitrum'

const Arbitrum: NextPage = () => {
  return <EcosystemPage
    {...arbitrum}
  />
}

export default Arbitrum
