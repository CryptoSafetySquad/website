import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../Components/Page'
import marketCap from '../functions/marketCap'

const l1ecos: any[] = [
  { name: 'Bitcoin', slug: 'bitcoin', marketCap: 523083932145, lastUpdated: '27/03/2023' },
  { name: 'Ethereum', slug: 'ethereum', marketCap: 209702870880, lastUpdated: '27/03/2023' },
  { name: 'Binance', slug: 'binance', marketCap: 48787711611, lastUpdated: '27/03/2023' },
  { name: 'Solana', slug: 'solana', marketCap: 7635818672, lastUpdated: '27/03/2023' },
  { name: 'Avalanche', slug: 'avalanche', marketCap: 5379728801, lastUpdated: '27/03/2023' },
  { name: 'Fantom', slug: 'fantom', marketCap: 1151938313, lastUpdated: '27/03/2023' },
  { name: 'Kadena', slug: 'kadena', marketCap: 204180499, lastUpdated: '27/03/2023' },
  { name: 'Nervos', slug: 'nervos', marketCap: 190951046, lastUpdated: '27/03/2023' },
  { name: 'Constellation', slug: 'constellation', marketCap: 62617251, lastUpdated: '27/03/2023' },
  // { name: 'Monero', slug: 'monero', marketCap: 2860827463, lastUpdated: '27/03/2023' },
]
const ethl2ecos: any[] = [
  { name: 'Polygon', slug: 'polygon', marketCap: 9451552471, lastUpdated: '27/03/2023' },
  { name: 'Arbitrum', slug: 'arbitrum', marketCap: 1516361415, lastUpdated: '27/03/2023' },
  { name: 'Optimism', slug: 'optimism', marketCap: 645197784, lastUpdated: '27/03/2023' },
]

const lastUpdated = '27/03/2023'

const Ecosystems: NextPage = () => {
  const title = 'Ecosystems'
  const content = (
    <>
      <p>If you are interested in any particular ecosystem you can follow the links below to deep dive and learn more about projects/tools etc in that space.</p>
      <p>Market Caps last updated: {lastUpdated}</p>

      <h2 className='mb-2 mt-4'>Layer 1</h2>
      <div className='grid grid-cols-4 gap-2 py-2'>
      {
        l1ecos.map(eco => {
          return (
            <div key={eco.slug} className='card with-bg'>
              <Link className='flex justify-between' href={`/ecosystems/${eco.slug}`}><span>{eco.name}</span><span className='text-xs'>{marketCap(eco.marketCap)}</span></Link>
            </div>
          )
        })
      }
      </div>

      <h2 className='mb-2 mt-4'>Ethereum Layer 2</h2>
      <div className='grid grid-cols-4 gap-2'>
      {
        ethl2ecos.map(eco => {
          return (
            <div key={eco.slug} className='card with-bg'>
              <Link className='flex justify-between' href={`/ecosystems/${eco.slug}`}><span>{eco.name}</span><span className='text-xs'>{marketCap(eco.marketCap)}</span></Link>
            </div>
          )
        })
      }
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'ecosystems',
      description: 'Ecosystems'
    }} />
  )
}

export default Ecosystems
