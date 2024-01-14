import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import polygon from '../../data/blockchains/layer2eth/polygon'

const Polygon: NextPage = () => {
  return <EcosystemPage
    {...polygon}
  />
}

export default Polygon
