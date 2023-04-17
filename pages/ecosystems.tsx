import type { NextPage } from 'next'
import Link from 'next/link'

import Page from '../Components/Page'
import marketCap from '../functions/marketCap'

import arbitrum from '../data/blockchains/layer2eth/arbitrum'
import avalanche from '../data/blockchains/avalanche'
import binance from '../data/blockchains/binance'
import bitcoin from '../data/blockchains/bitcoin'
import canto from '../data/blockchains/canto'
import consellation from '../data/blockchains/constellation'
import ethereum from '../data/blockchains/ethereum'
import fantom from '../data/blockchains/fantom'
import kadena from '../data/blockchains/kadena'
import monero from '../data/blockchains/monero'
import polygon from '../data/blockchains/layer2eth/polygon'
import solana from '../data/blockchains/solana'
import nervos from '../data/blockchains/nervos'
import optimism from '../data/blockchains/layer2eth/optimism'

const l1ecos: any[] = [
  { ...bitcoin, marketCap: 540115865088, lastUpdated: '09/04/2023' },
  { ...ethereum, marketCap: 221519687844, lastUpdated: '09/04/2023' },
  { ...binance, marketCap: 49069307443, lastUpdated: '27/03/2023' },
  { ...solana, marketCap: 7812135314, lastUpdated: '27/03/2023' },
  // { name: 'Litecoin', slug: 'litecoin', marketCap: 6823904572, lastUpdated: '' },
  { ...avalanche, marketCap: 5660089337, lastUpdated: '27/03/2023' },
  { ...monero, marketCap: 2907148559, lastUpdated: '27/03/2023' },
  { ...fantom, marketCap: 1151938313, lastUpdated: '27/03/2023' },
  { ...kadena, marketCap: 204180499, lastUpdated: '27/03/2023' },
  { ...canto, marketCap: 308341147, lastUpdated: '09/04/2023' },
  { ...nervos, marketCap: 190951046, lastUpdated: '27/03/2023' },
  { ...consellation, marketCap: 62617251, lastUpdated: '27/03/2023' },
]
const ethl2ecos: any[] = [
  { ...polygon, marketCap: 10000741025, lastUpdated: '09/04/2023' },
  { ...arbitrum, marketCap: 1474265907, lastUpdated: '09/04/2023' },
  { ...optimism, marketCap: 701913699, lastUpdated: '09/04/2023' },
]

const lastUpdated = '09/04/2023'

const EcosystemGrid = ({ ecosystems }: { ecosystems: any[]; }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2'>
    {
      ecosystems.map(eco => {
        let imageWidth = eco.iconRatio ? 24 * eco.iconRatio.x : 24
        let imageHeight = eco.iconRatio ? 24 * eco.iconRatio.y : 24

        return (
          <div key={eco.slug} className='card with-bg'>
            <Link className={`flex justify-between text-${eco?.metadata?.token?.name?.toLocaleLowerCase() || 'white'}`} href={`/ecosystems/${eco.slug}`}>
              <span className='flex'>
                {eco.icon && (typeof eco.icon === 'string') && (<img className='mr-2' alt={eco.name} src={eco.icon} width={imageWidth} height={imageHeight} />) }
                {eco.icon && (typeof eco.icon === 'object') && (
                  <>
                    <img className='mr-2 dark:hidden' alt={eco.name} src={eco.icon.default} width={imageWidth} height={imageHeight} />
                    <img className='mr-2 hidden dark:block' alt={eco.name} src={eco.icon.darkMode} width={imageWidth} height={imageHeight} />
                  </>
                )}
                {eco.name}
              </span>
              <span className='text-xs'>{marketCap(eco.marketCap)}</span>
            </Link>
          </div>
        )
      })
    }
    </div>
  )
}

const Ecosystems: NextPage = () => {
  const title = 'Ecosystems'
  const content = (
    <>
      <p>If you are interested in any particular ecosystem you can follow the links below to deep dive and learn more about projects/tools etc in that space.</p>
      <p>Market Caps last updated: {lastUpdated}</p>

      <h2 className='mb-2 mt-4'>Layer 1 Blockchains</h2>
      <EcosystemGrid ecosystems={l1ecos} />

      <h2 className='mb-2 mt-4'>Ethereum Layer 2</h2>
      <EcosystemGrid ecosystems={ethl2ecos} />
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
