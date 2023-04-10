import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../Components/Page'
import marketCap from '../functions/marketCap'

const l1ecos: any[] = [
  { name: 'Bitcoin', slug: 'bitcoin', marketCap: 540115865088, lastUpdated: '09/04/2023', token: 'btc' },
  { name: 'Ethereum', slug: 'ethereum', marketCap: 221519687844, lastUpdated: '09/04/2023', token: 'eth' },
  { name: 'Binance', slug: 'binance', marketCap: 49069307443, lastUpdated: '27/03/2023', token: 'bnb' },
  { name: 'Solana', slug: 'solana', marketCap: 7812135314, lastUpdated: '27/03/2023', token: 'sol' },
  { name: 'Avalanche', slug: 'avalanche', marketCap: 5660089337, lastUpdated: '27/03/2023', token: 'avax' },
  { name: 'Monero', slug: 'monero', marketCap: 2907148559, lastUpdated: '27/03/2023', token: 'xmr' },
  { name: 'Fantom', slug: 'fantom', marketCap: 1151938313, lastUpdated: '27/03/2023', token: 'ftm' },
  { name: 'Kadena', slug: 'kadena', marketCap: 204180499, lastUpdated: '27/03/2023', token: 'kda' },
  { name: 'Canto', slug: 'canto', marketCap: 308341147, lastUpdated: '09/04/2023', token: 'canto' },
  { name: 'Nervos', slug: 'nervos', marketCap: 190951046, lastUpdated: '27/03/2023', token: 'ckb' },
  { name: 'Constellation', slug: 'constellation', marketCap: 62617251, lastUpdated: '27/03/2023', token: 'dag' },
]
const ethl2ecos: any[] = [
  { name: 'Polygon', slug: 'polygon', marketCap: 10000741025, lastUpdated: '09/04/2023', token: 'matic' },
  { name: 'Arbitrum', slug: 'arbitrum', marketCap: 1474265907, lastUpdated: '09/04/2023', token: 'arb' },
  { name: 'Optimism', slug: 'optimism', marketCap: 701913699, lastUpdated: '09/04/2023', token: 'op' },
]

const lastUpdated = '09/04/2023'

const Ecosystems: NextPage = () => {
  const title = 'Ecosystems'
  const content = (
    <>
      <p>If you are interested in any particular ecosystem you can follow the links below to deep dive and learn more about projects/tools etc in that space.</p>
      <p>Market Caps last updated: {lastUpdated}</p>

      <h2 className='mb-2 mt-4'>Layer 1</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2'>
      {
        l1ecos.map(eco => {
          return (
            <div key={eco.slug} className='card with-bg'>
              <Link className={`flex justify-between text-${eco.token || 'white'}`} href={`/ecosystems/${eco.slug}`}><span>{eco.name}</span><span className='text-xs'>{marketCap(eco.marketCap)}</span></Link>
            </div>
          )
        })
      }
      </div>

      <h2 className='mb-2 mt-4'>Ethereum Layer 2</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2'>
      {
        ethl2ecos.map(eco => {
          return (
            <div key={eco.slug} className='card with-bg'>
              <Link className={`flex justify-between text-${eco.token || 'white'}`} href={`/ecosystems/${eco.slug}`}><span>{eco.name}</span><span className='text-xs'>{marketCap(eco.marketCap)}</span></Link>
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
