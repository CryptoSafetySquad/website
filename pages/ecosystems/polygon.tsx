import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Polygon: NextPage = () => {
  const title = 'Polygon'
  const content = (
    <>
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <p><ExternalLink href='https://polygonscan.com/' text='PolygonScan' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Exchanges (Centralised)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' />
            <ExternalLink href='https://www.gate.io/signup/11213076' text='Gate.io' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DEXs (Token Swap)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://quickswap.exchange/' text='QuickSwap' />
            <ExternalLink href='https://app.uniswap.org/' text='UniSwap' />
            <ExternalLink href='https://apeswap.finance/' text='ApeSwap' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>NFT Marketplaces</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://www.alphashares.io/' text='Alpha Shares' />
            <ExternalLink href='https://magiceden.io/' text='Magic Eden' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://magik.farm/#/polygon' text='Magik' />
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
      slug: 'ecosystems/polygon',
      description: 'Polygon'
    }} />
  )
}

export default Polygon
