import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Nervos: NextPage = () => {
  const title = 'Nervos'
  const content = (
    <>
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <p><ExternalLink href='https://explorer.nervos.org/' text='Nervos Explorer' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Exchanges (Centralised)</h2>
          <div className='grid grid-cols-2 gap-2'>
            {/* <ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' />
            <ExternalLink href='https://www.gate.io/signup/11213076' text='Gate.io' /> */}
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DEXs (Token Swap)</h2>
          <div className='grid grid-cols-2 gap-2'>
            {/* <ExternalLink href='https://app.uniswap.org/' text='UniSwap' />
            <ExternalLink href='https://pancakeswap.finance/' text='PancakeSwap' />
            <ExternalLink href='https://www.aequinox.exchange/#/' text='Aequinox' />
            <ExternalLink href='https://apeswap.finance/' text='ApeSwap' /> */}
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
            {/* <ExternalLink href='https://app.beefy.com/' text='Beefy' />
            <ExternalLink href='https://magik.farm/#/bsc' text='Magik' />
            <ExternalLink href='https://autofarm.network/' text='Autofarm' />
            <ExternalLink href='https://yieldwolf.finance/' text='YieldWolf' />
            <ExternalLink href='https://dexvaults.com/' text='dexVaults+' /> */}
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
            {/* <ExternalLink href='https://emp.money/' text='EMP Money' /> */}
          </div>
        </div>

        <div className='card'>
          <h2>NFT Marketplaces</h2>
          <div className='grid grid-cols-2 gap-2'>
            {/* <ExternalLink href='https://www.alphashares.io/' text='Alpha Shares' /> */}
          </div>
        </div>

        {/* <div className='card'>
          <h2 className='mb-2'>&quot;Risky&quot; Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://drip.community/' text='DRIP' />
          </div>
        </div> */}
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/nervos',
      description: 'Nervos'
    }} />
  )
}

export default Nervos
