import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Kadena: NextPage = () => {
  const title = 'Kadena'
  const content = (
    <>
      <ExternalLink href='https://kadena.io/' text='Official Website' />
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <ExternalLink href='https://explorer.chainweb.com/mainnet' text='Kadena Block Explorer' />
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
            <ExternalLink href='https://swap.kaddex.com/' text='Kaddex' />
            <ExternalLink href='https://www.kdswap.exchange/' text='KDSwap' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
            
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
            
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>&quot;Dead&quot; Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
            
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Launchpads</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://hypercent.io/' text='Hypercent' />
            <ExternalLink href='https://www.kdlaunch.com/' text='KDLaunch' />
            <ExternalLink href='https://www.tokensoft.io/' text='Tokensoft' />
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Gaming</h2>
          <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://ufogaming.io/' text='UFO Gaming' />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/kadena',
      description: 'Kadena'
    }} />
  )
}

export default Kadena
