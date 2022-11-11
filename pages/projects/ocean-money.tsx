import type { NextPage } from 'next'
import Page from '../../Components/Page'
import TabbedContent from '../../Components/TabbedContent'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import Link from 'next/link'

const NewsContent = () => {
  const news = [
    { date: '02/10/2022', content: 'Ocean Money announced on hydro whales discord' }
  ]
  return (
    <>
      {
        news.map((entry, index) => {
          return <p className='mb-0 text-sm' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
        })
      }
    </>
  )
}

const OceanMoney: NextPage = () => {
  const title = 'Ocean Money'
  const tabs = [
    {
      title: 'News',
      content: <NewsContent />
    },
    // {
    //   title: 'FAQs',
    //   content: <Answers qa={answers} />
    // },
  ]

  const content = (
    <>
      <div className='grid gap-2 grid-cols-[3fr_1fr]'>
        <div className='card'>
          <TabbedContent content={tabs} />
        </div>
        <div>
          <div className='card'>
            <h2 className='mb-2'>Related Projects</h2>
            <ul>
            <li><Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link></li>
            <li><Link href='/projects/project79'><a>Project 79</a></Link> - Gold Arbitrage</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/ocean-money',
      description: 'Ocean Money',
      header: (
        <Header
          name='Ocean Money'
          twitter='OceanMoney_'
          website='https://www.ocean.money/'
        />
      )
    }} />
  )
}

export default OceanMoney
