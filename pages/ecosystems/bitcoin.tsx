import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

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
        <p><ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' /></p>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/bitcoin',
      description: 'Bitcoin'
    }} />
  )
}

export default Bitcoin
