import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import vulcan from '../../data/blockchains/vulcan'

const Vulcan: NextPage = () => {
  return <EcosystemPage
    {...vulcan}
  />
}

export default Vulcan
