import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import canto from '../../data/blockchains/canto'

const Canto: NextPage = () => {
  return <EcosystemPage
  {...canto}
  />
}

export default Canto
