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
import solana from '../data/blockchains/solana'
import nervos from '../data/blockchains/nervos'
// Eth Layer 2
import arbitrum from '../data/blockchains/layer2eth/arbitrum'
import polygon from '../data/blockchains/layer2eth/polygon'
import optimism from '../data/blockchains/layer2eth/optimism'

const l1ecos: any[] = [
  { ...bitcoin, marketCap: 495610038966, lastUpdated: '16/06/2023' },
  { ...ethereum, marketCap: 200492209355, lastUpdated: '16/06/2023' },
  { ...binance, marketCap: 36886308118, lastUpdated: '16/06/2023' },
  { ...cardano, marketCap: 9114624590, lastUpdated: '16/06/2023' },
  { ...solana, marketCap: 5900365921, lastUpdated: '16/06/2023' },
  // { name: 'Litecoin', slug: 'litecoin', marketCap: 6823904572, lastUpdated: '' },
  { ...avalanche, marketCap: 3937538704, lastUpdated: '16/06/2023' },
  { ...cosmos, marketCap: 2974424096, lastUpdated: '19/06/2023' },
  { ...monero, marketCap: 2503949150, lastUpdated: '16/06/2023' },
  { ...fantom, marketCap: 711720765, lastUpdated: '16/06/2023' },
  { ...kadena, marketCap: 122733452, lastUpdated: '16/06/2023' },
  { ...nervos, marketCap: 104561039, lastUpdated: '16/06/2023' },
  { ...consellation, marketCap: 62617251, lastUpdated: '16/06/2023' },
  { ...canto, marketCap: 51729762, lastUpdated: '16/06/2023' }
]
const ethl2ecos: any[] = [
  { ...polygon, marketCap: 5451402844, lastUpdated: '16/06/2023' },
  { ...arbitrum, marketCap: 1215723115, lastUpdated: '16/06/2023' },
  { ...optimism, marketCap: 716034544, lastUpdated: '16/06/2023' },
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
