import type { NextPage } from 'next'
import Link from 'next/link'

import NewsListing from '../../Components/NewsListing'
import Header from '../../Components/Project/Header'
import { OceanMoney as Project } from '../../data/projects/oceanmoney/oceanmoney'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import FullPage from '../../Components/FullPage'
import Feed from '../../Components/Project/Feed'
import { buildFeed } from '../../functions/Project/buildFeed'

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
      <main className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <Feed entries={buildFeed(Project)} />  
      </main>
    </>
  )

  return (
    <FullPage {...{
      title,
      content,
      slug: 'projects/ocean-money',
      description: 'Ocean Money',
      header: <Header {...Project} />,
      sidebarContent: (
        <>
          <div className='card'>
            <h2 className='mb-2'>Related Projects</h2>
            <ul>
              <li className='text-xs'><Link href='/projects/hydro-whales'>Hydro Whales Mining Club</Link></li>
              <li className='text-xs'><Link href='/projects/project79'>Project 79</Link> - Gold Arbitrage</li>
            </ul>
          </div>
        </>
      )
    }} />
  )
}

export default OceanMoney
