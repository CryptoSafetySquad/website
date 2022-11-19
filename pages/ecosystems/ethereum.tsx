import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const Ethereum: NextPage = () => {
  const title = 'Ethereum'
  const content = (
    <>
      <div className='grid grid-cols-3 gap-2'>
        <div className='card'>
          <h2 className='mb-2'>Block Explorer</h2>
          <p><ExternalLink href='https://etherscan.io' text='Etherscan' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Exchanges (Centralised)</h2>
          <p><ExternalLink href='https://www.kucoin.com/r/rf/rJQQK1S' text='KuCoin' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DEXs (Token Swap)</h2>
          <p><ExternalLink href='https://app.uniswap.org/' text='UniSwap' /></p>
          <p><ExternalLink href='https://pancakeswap.finance/' text='PancakeSwap' /></p>
        </div>

        <div className='card'>
          <h2 className='mb-2'>NFT Marketplaces</h2>
          <p><ExternalLink href='https://opensea.io/' text='OpenSea' /></p>
          <p><ExternalLink href='https://x2y2.io/' text='X2Y2' /></p>
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
      slug: 'ecosystems/ethereum',
      description: 'Ethereum'
    }} />
  )
}

export default Ethereum
