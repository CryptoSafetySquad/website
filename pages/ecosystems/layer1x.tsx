import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import layer1x from '../../data/blockchains/layer1x'

const LayerOneX: NextPage = () => {
  return <EcosystemPage {...layer1x} />
}

export default LayerOneX
