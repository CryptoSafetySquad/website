import type { NextPage } from 'next'
import Page from '../../Components/Page'
import TabbedContent from '../../Components/TabbedContent'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import Link from 'next/link'

const NewsContent = () => {
  const news = [
    { date: '', content: '' }
  ]
  return (
    <>
    {
      news.map((entry, index) => {
        return <div key={`news-item-${index}`}>{entry.content}</div>
      })
    }
    </>
  )
}

const OceanMoney: NextPage = () => {
  const title = 'Ocean Money'
  const tabs = [
    // {
    //   title: 'News',
    //   content: <NewsContent />
    // },
    // {
    //   title: 'FAQs',
    //   content: <Answers qa={answers} />
    // },
    {
      title: 'Related Projects',
      content: (
        <>
          <ul>
            <li><Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link></li>
            <li><Link href='/projects/project79'><a>Project 79</a></Link> - Gold Arbitrage</li>
          </ul>
        </>
      )
    }
  ]

  const content = (
    <>
      <TabbedContent content={tabs} />
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
        />
      )
    }} />
  )
}

export default OceanMoney
