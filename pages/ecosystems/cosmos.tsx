import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import cosmos from '../../data/blockchains/cosmos'

const Cosmos: NextPage = () => {
  return <EcosystemPage
  {...cosmos}
  />
}

export default Cosmos
