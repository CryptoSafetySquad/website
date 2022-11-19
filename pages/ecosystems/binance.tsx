import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Binance: NextPage = () => {
  const title = 'Binance'
  const content = (
    <>
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <p><ExternalLink href='https://bscscan.com/' text='BscScan' /></p>
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
            <ExternalLink href='https://app.uniswap.org/' text='UniSwap' />
            <ExternalLink href='https://pancakeswap.finance/' text='PancakeSwap' />
            <ExternalLink href='https://www.aequinox.exchange/#/' text='Aequinox' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://app.beefy.com/' text='Beefy' />
            <ExternalLink href='https://magik.farm/#/bsc' text='Magik' />
            <ExternalLink href='https://autofarm.network/' text='Autofarm' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://emp.money/' text='EMP Money' />
            <ExternalLink href='https://drip.community/' text='DRIP' />
          </div>
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
