import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import nervos from '../../data/blockchains/nervos'

const Nervos: NextPage = () => {
  return <EcosystemPage
    {...nervos}
  />
}

export default Nervos
