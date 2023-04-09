import type { NextPage } from 'next'
import { EcosystemLink } from '../../types/EcosystemLink'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const data: { [key: string]: EcosystemLink[] } = {
  explorers: [
    { name: '', link: '', },
  ],
  centralisedExchanges: [],
  decentralisedExchanges: [],
  defi: [],
  protocols: [],
  nftMarketplaces: [],
  riskyProjects: [],
  wallets: []
}

const Arbitrum: NextPage = () => {
  const title = 'Arbitrum'
  const content = (
    <div className='grid md:grid-cols-3 gap-2'>
      <div className='card'>
        <h2 className='mb-2'>Block Explorer</h2>
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
            <ExternalLink href='https://www.alphashares.io/' text='Alpha Shares' />
          </div>
        </div>

      <div className='card'>
        <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
        <div className='grid grid-cols-2 gap-2'>
            <ExternalLink href='https://yieldwolf.finance/' text='YieldWolf' />
        </div>
      </div>
    </div>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems/arbitrum',
      description: 'Arbitrum'
    }} />
  )
}

export default Arbitrum
