import type { NextPage } from 'next'
import { Line } from 'react-chartjs-2';
import Link from 'next/link'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
import Header from '../../Components/Project/Header'
import PrivateSniper from '../../data/authors/PrivateSniper'
import earnings from '../../data/projects/project79/earnings'
import tvl from '../../data/projects/project79/tvl'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const doxxed = () => {
  return (
    <>
      Core team fully <abbr title='Doxxed means personal data is available about team members, photo, work history, social media profiles etc.'>doxxed</abbr>: <ExternalLink href='https://www.hydrowhalesclub.com/#team' />
    </>
  )
}

const Research = () => {
  const tick = '✅'
  const warn = '⚠️'

  const score = 10

  const author = PrivateSniper
  const goodPoints = [
    { key: 'doxxed', content: doxxed() },
    { key:'legal', content: 'Has legal team on retainer' },
    { key:'whitepaper', content: 'Full whitepaper' },
    { key:'wayback', content: (<>Website content is captured in <ExternalLink href='https://web.archive.org/web/20220711192706/https://www.hydrowhalesclub.com/' text='wayback machine' /></>) }
  ]
  
  const redFlags = []
  
  const overview = {
    project: 'Hydro Whales Mining Club',
    slug: 'hydro-whales',
    researcher: PrivateSniper,
    points: { good: goodPoints.length, bad: redFlags.length },
    score
  }

  const researchContent = (
    <div className='guide'>
      <p>See research for <Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link> as is ran by the same team.</p>
    </div>
  )

  return (
    <div>
      <h1 className='mb-6'>Project 79 Research</h1>
      {researchContent}
    </div>
  )
}

const NewsContent = () => {
  const news = [
    { date: '4/11/2022', content: '3rd sacrifice period closed, TVL $7.1m' },
    { date: '24/10/2022', content: '2nd Sacrifice earnings of 6.4%' },
    { date: '26/09/2022', content: '1st Sacrifice earnings of 6.8%, plus new dashboard launched' }
  ]
  return (
    <>
    {
      news.map((entry, index) => {
        return <div className='mb-2' key={`news-item-${index}`}>{entry.date} - {entry.content}</div>
      })
    }
    </>
  )
}

const StatsContent = () => {
  const tvlData = { labels: [], data: [] }
  tvl.forEach(value => { tvlData.labels.push(value.label); tvlData.data.push(value.tvl) })
  const earningsData = { labels: [], data: [] }
  earnings.forEach(value => { earningsData.labels.push(value.label); earningsData.data.push(value.percent) })

  const chartHeight = '250px'

  return (
    <>
      <h2 className='text-gold'>Earnings</h2>
      {/* Earnings */}
      <div style={{ height: chartHeight }}>
        <Line
          // datasetIdKey='id'
          options={{
            maintainAspectRatio: false
          }}
          data={{
            labels: earningsData.labels,
            datasets: [
              {
                label: 'Earnings',
                data: earningsData.data,
                borderColor: '#b49b68',
                backgroundColor: '#b49b68',
              }
            ],
          }}
        />
      </div>

      {/* TVL */}
      <h2 className='text-gold'>TVL</h2>
      <div style={{ height: chartHeight }}>
        <Line
          // datasetIdKey='id'
          options={{
            maintainAspectRatio: false
          }}
          data={{
            labels: tvlData.labels,
            datasets: [
              {
                label: 'TVL',
                data: tvlData.data,
                borderColor: '#b49b68',
                backgroundColor: '#b49b68',
              }
            ],
          }}
        />
      </div>
    </>
  )
  

  return 
}

const Project79: NextPage = () => {
  const title = 'Project 79'
  const tabs = [
    {
      title: 'News',
      content: <NewsContent />
    },
    {
      title: 'Stats',
      content: <StatsContent />
    },
    {
      title: 'Research',
      content: <Research />
    },
    {
      title: 'Related Projects',
      content: (
        <ul>
          <li><Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link></li>
        </ul>
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
      slug: 'projects/project79',
      description: 'Project 79',
      header: <Header className='text-gold' name={title} website='https://www.project79.com/' />
    }} />
  )
}

export default Project79
