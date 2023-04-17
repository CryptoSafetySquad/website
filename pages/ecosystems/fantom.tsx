import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import fantom from '../../data/blockchains/fantom'

const Fantom: NextPage = () => {
  return <EcosystemPage {...fantom} />
}

export default Fantom
