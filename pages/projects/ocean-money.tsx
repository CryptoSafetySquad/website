import type { NextPage } from 'next'
import Link from 'next/link'

import Page from '../../Components/Page'
import NewsListing from '../../Components/NewsListing'
import Header from '../../Components/Project/Header'
import { OceanMoney as Project } from '../../data/projects/oceanmoney/oceanmoney'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import { NewsEntry } from '../../types/NewsEntry'
import ExternalLink from '../../Components/ExternalLink'

const NewsContent = () => {
  const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

  return (
    <>
      <h2 className='mb-2'>{newsIcon} News</h2>
      <NewsListing newsEntries={Project.news} />
    </>
  )
}

const OceanMoney: NextPage = () => {
  const title = 'Ocean Money'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main className='card'>
          <NewsContent />
        </main>
        <aside>
          <div className='card'>
            <h2 className='mb-2'>Related Projects</h2>
            <ul>
              <li className='text-xs'><Link href='/projects/hydro-whales'>Hydro Whales Mining Club</Link></li>
              <li className='text-xs'><Link href='/projects/project79'>Project 79</Link> - Gold Arbitrage</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/ocean-money',
      description: 'Ocean Money',
      header: <Header {...Project} />
    }} />
  )
}

export default OceanMoney
