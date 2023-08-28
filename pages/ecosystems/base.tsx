import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import base from '../../data/blockchains/layer2eth/base'

const Base: NextPage = () => {
  return <EcosystemPage
    {...base}
  />
}

export default Base
