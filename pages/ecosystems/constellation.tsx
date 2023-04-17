import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import constellation from '../../data/blockchains/constellation'

const Constellation: NextPage = () => {
  return <EcosystemPage {...constellation} />
}

export default Constellation
