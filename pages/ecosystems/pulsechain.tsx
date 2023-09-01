import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import pulsechain from '../../data/blockchains/pulsechain'

const PulseChain: NextPage = () => {
  return <EcosystemPage
  {...pulsechain}
  />
}

export default PulseChain
