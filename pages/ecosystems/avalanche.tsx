import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import avalanche from '../../data/blockchains/avalanche'

const Avalanche: NextPage = () => {
  return <EcosystemPage
    {...avalanche}
  />
}

export default Avalanche
