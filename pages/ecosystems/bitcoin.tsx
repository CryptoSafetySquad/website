import type { NextPage } from 'next'
import EcosystemPage from '../../Components/EcosystemPage'
import bitcoin from '../../data/blockchains/bitcoin'

const Bitcoin: NextPage = () => {
  return <EcosystemPage
    {...bitcoin}
  />
}

export default Bitcoin
