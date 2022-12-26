import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const Bitcoin: NextPage = () => {
  const title = 'Bitcoin'
  const content = (
    <div className='grid md:grid-cols-3 gap-2'>
      <div className='card'>
        <h2 className='mb-2'>Block Explorers</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://mempool.space/' text='mempool.space' />
          <ExternalLink href='https://www.blockchain.com/explorer' text='Blockchain.com Explorer' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>Exchanges (Centralised)</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' />
          <ExternalLink href='https://www.gate.io/signup/11213076' text='Gate.io' />
        </div>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      header: (
        <h1 className='flex'>
          <ModeSwitchingIcon filename='bitcoin' size={24} />
          Bitcoin
        </h1>
      ),
      content,
      slug: 'ecosystems/bitcoin',
      description: 'Bitcoin'
    }} />
  )
}

export default Bitcoin
