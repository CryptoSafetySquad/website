import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Binance: NextPage = () => {
  const title = 'Binance'
  const content = (
    <>
      <div className='grid grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <p><ExternalLink href='https://bscscan.com/' text='BscScan' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Exchanges (Centralised)</h2>
          <p><ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <p><ExternalLink href='https://app.beefy.com/' text='Beefy' /></p>
        </div>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/binance',
      description: 'Binance'
    }} />
  )
}

export default Binance
