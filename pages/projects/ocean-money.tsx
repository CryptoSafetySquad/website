import type { NextPage } from 'next'
import Link from 'next/link'

import Page from '../../Components/Page'
import TabbedContent from '../../Components/TabbedContent'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import { OceanMoney as Project } from '../../data/projects/oceanmoney/oceanmoney'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import { NewsEntry } from '../../types/NewsEntry'

const NewsContent = () => {
  const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

  return (
    <>
      <h2 className='mb-2'>{newsIcon} News</h2>
      {
        Project.news.map((entry: NewsEntry, index: number) => {
          return <p className='mb-0 text-sm' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
        })
      }
    </>
  )
}

const OceanMoney: NextPage = () => {
  const title = 'Ocean Money'
  // const tabs = [
  //   {
  //     title: 'News',
  //     content: <NewsContent />
  //   },
  //   // {
  //   //   title: 'FAQs',
  //   //   content: <Answers qa={answers} />
  //   // },
  // ]

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
              <li><Link href='/projects/hydro-whales'>Hydro Whales Mining Club</Link></li>
              <li><Link href='/projects/project79'>Project 79</Link> - Gold Arbitrage</li>
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
