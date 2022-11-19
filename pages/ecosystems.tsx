import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../Components/Page'

const l1ecos: any[] = [
  // { name: 'Bitcoin', slug: 'bitcoin' },
  { name: 'Ethereum', slug: 'ethereum' },
  // { name: 'Avalanche', slug: 'avalanche' },
  // { name: 'Solana', slug: 'solana' },
  { name: 'Binance', slug: 'binance' },
  // { name: '', slug: '' },
  // { name: '', slug: '' },
]
const ethl2ecos: any[] = [
  // { name: 'Optimism', slug: 'optimism' },
  // { name: 'Arbitrum', slug: 'arbitrum' },
]

const Ecosystems: NextPage = () => {
  const title = 'Ecosystems'
  const content = (
    <>
      <p>If you are interested in any particular ecosystem you can follow the links below to deep dive and learn more about projects/tools etc in that space.</p>

      <h2 className='mb-2 mt-4'>Layer 1</h2>
      <div className='grid grid-cols-4 gap-2 py-2'>
      {
        l1ecos.map(eco => {
          return (
            <div key={eco.slug} className='card'>
              <Link href={`/ecosystems/${eco.slug}`}>{eco.name}</Link>
            </div>
          )
        })
      }
      </div>

      {/* <h2 className='mb-2 mt-4'>Ethereum Layer 2</h2>
      <div className='grid grid-cols-4 gap-2'>
      {
        ethl2ecos.map(eco => {
          return (
            <div key={eco.slug} className='card'>
              <Link href={`/ecosystems/${eco.slug}`}>{eco.name}</Link>
            </div>
          )
        })
      }
      </div> */}
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
