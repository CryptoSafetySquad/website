import type { NextPage } from 'next'

import EcosystemPage from '../../Components/EcosystemPage'

import binance from '../../data/blockchains/binance'

const Binance: NextPage = () => {
  return <EcosystemPage
    {...binance}
  />
}

export default Binance
