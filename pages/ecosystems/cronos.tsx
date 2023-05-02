import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import cronos from '../../data/blockchains/cronos'

const Cronos: NextPage = () => {
  return <EcosystemPage
    {...cronos}
    iconSize={{w: 28, h:40}}
  />
}

export default Cronos
