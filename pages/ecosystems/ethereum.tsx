import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const Ethereum: NextPage = () => {
  const title = 'Ethereum'
  const content = (
    <div className='grid md:grid-cols-3 gap-2'>
      <div className='card'>
        <h2 className='mb-2'>Block Explorer</h2>
        <p><ExternalLink href='https://etherscan.io' text='Etherscan' /></p>
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
          <ExternalLink href='https://app.uniswap.org/' text='UniSwap' />
          <ExternalLink href='https://pancakeswap.finance/' text='PancakeSwap' />
          <ExternalLink href='https://apeswap.finance/' text='ApeSwap' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>NFT Marketplaces</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://opensea.io/' text='OpenSea' />
          <ExternalLink href='https://x2y2.io/' text='X2Y2' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://app.beefy.com/' text='Beefy' />
        </div>
      </div>

      <div className='card'>
        <h2 className='mb-2'>Stake/Yield Generation</h2>
        <div className='grid grid-cols-2 gap-2'>
          <ExternalLink href='https://midas.investments/' text='Midas Investments' />
        </div>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      header: (
        <>
          <h1 className='flex'>
            <ModeSwitchingIcon filename='ethereum' size={16} />
            Ethereum
          </h1>
        </>
      ),
      content,
      slug: 'ecosystems/ethereum',
      description: 'Ethereum'
    }} />
  )
}

export default Ethereum
