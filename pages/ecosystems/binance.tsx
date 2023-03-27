import type { NextPage } from 'next'

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'

const data = {
  centralisedExchanges: [
    { name: 'KuCoin', link: 'https://www.kucoin.com/r/rf/rJQQK1S' },
    { name: 'Gate.io', link: 'https://www.gate.io/signup/11213076' },
  ],
  decentralisedExchanges: [
    { name: 'UniSwap', link: 'https://app.uniswap.org/' },
    { name: 'PancakeSwap', link: 'https://pancakeswap.finance/' },
    { name: 'Aequinox', link: 'https://www.aequinox.exchange/#/' },
    { name: 'ApeSwap', link: 'https://apeswap.finance/' },
    { name: 'Thena', link: 'https://thena.fi/' }
  ],
  defi: [
    { name: 'Beefy', link: 'https://app.beefy.com/' },
    { name: 'Magik', link: 'https://magik.farm/#/bsc' },
    { name: 'Autofarm', link: 'https://autofarm.network/' },
    { name: 'YieldWolf', link: 'https://yieldwolf.finance/' },
    { name: 'dexVaults+', link: 'https://dexvaults.com/' },
  ],
  protocols: [
    { name: 'EMP Money', link: 'https://emp.money/' },
  ],
  nftMarketplaces: [
    { name: 'Alpha Shares', link: 'https://www.alphashares.io/' },
  ]
}

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
          {
            data.centralisedExchanges.map(cex => <ExternalLink key={cex.name} href={cex.link} text={cex.name} />)
          }
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DEXs (Token Swap)</h2>
          <div className='grid grid-cols-2 gap-2'>
          {
            data.decentralisedExchanges.map(dex => <ExternalLink key={dex.name} href={dex.link} text={dex.name} />)
          }
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>DeFI (Decentralised Finance)</h2>
          <div className='grid grid-cols-2 gap-2'>
          {
            data.defi.map(df => <ExternalLink key={df.name} href={df.link} text={df.name} />)
          }
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
          {
            data.protocols.map(p => <ExternalLink key={p.name} href={p.link} text={p.name} />)
          }
          </div>
        </div>

        <div className='card'>
          <h2>NFT Marketplaces</h2>
          <div className='grid grid-cols-2 gap-2'>
          {
            data.nftMarketplaces.map(n => <ExternalLink key={n.name} href={n.link} text={n.name} />)
          }
          </div>
        </div>

        <div className='card'>
          <h2 className='mb-2'>&quot;Risky&quot; Projects / Protocols</h2>
          <div className='grid grid-cols-2 gap-2'>
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
