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
import Header from '../../Components/Project/Header'
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
        return <p className='mb-0 text-sm' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
      })
    }
    </>
  )
}

const StatsContent = () => {
  // Compile TVL data
  const tvlData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  tvl.forEach(value => { tvlData.labels.push(value.label); tvlData.data.push(value.tvl) })
  // Compile earnings data
  const earningsData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  earnings.forEach(value => { earningsData.labels.push(value.label); earningsData.data.push(value.percent) })

  const chartHeight = '175px'

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2 className='text-gold'>Earnings</h2>
        <div style={{ height: chartHeight }}>
          <Line
            // datasetIdKey='id'
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                    beginAtZero: true
                }
              }
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
      </div>
    
      {/* TVL */}
      <div className='card'>
        <h2 className='text-gold'>TVL</h2>
        <div style={{ height: chartHeight }}>
          <Line
            // datasetIdKey='id'
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                    beginAtZero: true
                }
              }
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
      </div>
      
    </>
  )
}

const Project79: NextPage = () => {
  const title = 'Project 79'

  const content = (
    <>
      <div className='grid gap-2 grid-cols-[3fr_1fr]'>
        <div className='card'>
          <h2 className='text-gold'>News</h2>
          <NewsContent />
        </div>
        <div>
          <StatsContent />

          <div className='card'>
          <h2 className='text-gold'>Related Projects</h2>
            <ul>
              <li><Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link></li>
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
      slug: 'projects/project79',
      description: 'Project 79',
      header: <Header
        className='text-gold'
        name={title}
        website='https://www.project79.com/'
        description={<p>A <Link href='/projects/hydro-whales'><a>HydroWhales Mining Club</a></Link> launchpad project</p>}
      />
    }} />
  )
}

export default Project79
