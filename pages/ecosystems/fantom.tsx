import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const Fantom: NextPage = () => {
  const title = 'Fantom'
  const content = (
    <div className='grid md:grid-cols-3 gap-2'>
      <div className='card'>
        <h2 className='mb-2'>Block Explorer</h2>
        <p><ExternalLink href='https://ftmscan.com/' text='FTMScan' /></p>
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
          <ExternalLink href='https://spooky.fi/#/' text='SpookySwap' />
          <ExternalLink href='https://swap.spiritswap.finance/' text='SpiritSwap' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>NFT Marketplaces</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://www.alphashares.io/' text='Alpha Shares' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://app.beefy.com/' text='Beefy' />
          <ExternalLink href='https://dexvaults.com/' text='dexVaults+' />
        </div>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/fantom',
      description: 'Fantom'
    }} />
  )
}

export default Fantom
