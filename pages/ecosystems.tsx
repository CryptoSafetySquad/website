import type { NextPage } from 'next'
import Link from 'next/link'

import Page from '../Components/Page'
import marketCap from '../functions/marketCap'

// L1
import avalanche from '../data/blockchains/avalanche'
import binance from '../data/blockchains/binance'
import bitcoin from '../data/blockchains/bitcoin'
import canto from '../data/blockchains/canto'
import cardano from '../data/blockchains/cardano'
import consellation from '../data/blockchains/constellation'
import cosmos from '../data/blockchains/cosmos'
import ethereum from '../data/blockchains/ethereum'
import fantom from '../data/blockchains/fantom'
import kadena from '../data/blockchains/kadena'
import monero from '../data/blockchains/monero'
import pulsechain from '../data/blockchains/pulsechain'
import solana from '../data/blockchains/solana'
import nervos from '../data/blockchains/nervos'
import sui from '../data/blockchains/sui'
// Eth Layer 2
import arbitrum from '../data/blockchains/layer2eth/arbitrum'
import polygon from '../data/blockchains/layer2eth/polygon'
import optimism from '../data/blockchains/layer2eth/optimism'
import layer1x from '../data/blockchains/layer1x'

const l1ecos: any[] = [
  { ...bitcoin, marketCap: 2000197160919, lastUpdated: '28/01/2025' },
  { ...ethereum, marketCap: 368030754681, lastUpdated: '28/01/2025' },
  { ...solana, marketCap: 109833503200, lastUpdated: '28/01/2025' },
  { ...binance, marketCap: 94118258943, lastUpdated: '28/01/2025' },
  { ...cardano, marketCap: 32030673751, lastUpdated: '28/01/2025' },
  // { name: 'Litecoin', slug: 'litecoin', marketCap: 6823904572, lastUpdated: '' },
  { ...avalanche, marketCap: 13259034464, lastUpdated: '28/01/2025' },
  { ...sui, marketCap: 11049837523, lastUpdated: '28/01/2025' },
  { ...layer1x, marketCap: 3709832097, lastUpdated: '28/01/2025' },
  { ...cosmos, marketCap: 2219805517, lastUpdated: '28/01/2025' },
  { ...monero, marketCap: 4021826494, lastUpdated: '28/01/2025' },
  { ...fantom, marketCap: 1273430876, lastUpdated: '28/01/2025' },
  { ...nervos, marketCap: 360336612, lastUpdated: '28/01/2025' },
  { ...kadena, marketCap: 208338501, lastUpdated: '28/01/2025' },
  { ...consellation, marketCap: 197059609, lastUpdated: '28/01/2025' },
  { ...pulsechain, marketCap: 753718078, lastUpdated: '28/01/2025' },
  { ...canto, marketCap: 10373023, lastUpdated: '28/01/2025' },
]
const ethl2ecos: any[] = [
  { ...polygon, marketCap: 3331512508, lastUpdated: '28/01/2025' },
  { ...arbitrum, marketCap: 2581795069, lastUpdated: '28/01/2025' },
  { ...optimism, marketCap: 1863022579, lastUpdated: '28/01/2025' },
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
