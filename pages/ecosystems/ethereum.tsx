import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import ethereum from '../../data/blockchains/ethereum'

const Ethereum: NextPage = () => {
  return <EcosystemPage
    {...ethereum}
    iconSize={{w: 28, h:40}}
  />
}

export default Ethereum
