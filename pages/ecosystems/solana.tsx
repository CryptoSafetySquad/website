import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Solana: NextPage = () => {
  const title = 'Solana'
  const content = (
    <div className='grid md:grid-cols-3 gap-2'>
      <div className='card'>
        <h2 className='mb-2'>Block Explorer</h2>
        <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://explorer.solana.com/' text='Solana Explorer' />
            <ExternalLink href='https://solscan.io/' text='Solscan' />
        </div>
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
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>NFT Marketplaces</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://magiceden.io/' text='Magic Eden' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
        <div className='grid grid-cols-2 gap-2'>
        </div>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/solana',
      description: 'Solana'
    }} />
  )
}

export default Solana
