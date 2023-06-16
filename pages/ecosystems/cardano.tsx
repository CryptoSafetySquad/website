import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import cardano from '../../data/blockchains/cardano'

const Cardano: NextPage = () => {
  return <EcosystemPage
  {...cardano}
  />
}

export default Cardano
