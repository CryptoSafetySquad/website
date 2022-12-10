import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Avalanche: NextPage = () => {
  const title = 'Avalanche'
  const content = (
    <>
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <ExternalLink href='https://snowtrace.io/' text='Snowtrace' />
        </div>

        <div className='card'>
          <h2 className='mb-2'>Exchanges (Centralised)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DEXs (Token Swap)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://traderjoexyz.com/' text='TraderJoe' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://yieldwolf.finance/' text='YieldWolf' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/avalanche',
      description: 'Avalanche'
    }} />
  )
}

export default Avalanche
