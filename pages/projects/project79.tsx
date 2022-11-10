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

function average(nums: number[]) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

const NewsContent = () => {
  const news = [
    { date: '4/11/2022', content: '3rd sacrifice period closed, TVL $7.1m' },
    { date: '29/10/2022', content: (<>James Pelton AMA - <a href='https://www.youtube.com/watch?v=zpd8L2rlLgg' rel='noopener noreferrer' target='_blank'>AMA with Project 79: Making 6%/month With Actual Revenue</a></>) },
    { date: '24/10/2022', content: '2nd Sacrifice earnings of 6.4%' },
    { date: '26/09/2022', content: (<>1st Sacrifice earnings of 6.8%, plus new <a href='https://sacrifice.project79.com/' rel='noreferrer noopener' target='_blank'>sacrifice dashboard</a> launched</>) }
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

const P79Chart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
  const chartHeight = '175px'
  return (
    <div style={{ height: chartHeight }}>
      <Line
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              borderColor: '#b49b68',
              backgroundColor: '#b49b68',
            }
          ],
        }}
      />
    </div>
  )
}

const StatsContent = () => {
  // Compile TVL data
  const tvlData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  tvl.forEach(value => { tvlData.labels.push(value.label); tvlData.data.push(value.tvl) })
  // Compile earnings data
  const earningsData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  earnings.forEach(value => { earningsData.labels.push(value.label); earningsData.data.push(value.percent) })

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2 className='dark:text-gold'>Earnings</h2>
        <P79Chart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData.data}
        />
        <div className='flex justify-between'>
        <span className='dark:text-gold'>Average: {average(earningsData.data)}%</span>
        <span className='dark:text-gold'>Latest: {earningsData.data[earningsData.data.length - 1]}%</span>
        </div>
        
      </div>
    
      {/* TVL */}
      <div className='card'>
        <h2 className='dark:text-gold'>TVL</h2>
        <P79Chart
          labels={tvlData.labels}
          title='TVL'
          data={tvlData.data}
        />
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
          <h2 className='dark:text-gold'>News</h2>
          <NewsContent />
        </div>
        <div>
          <StatsContent />

          <div className='card'>
          <h2 className='dark:text-gold'>Related Projects</h2>
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
        className='dark:text-gold'
        name={title}
        website='https://www.project79.com/'
        description={<p>A <Link href='/projects/hydro-whales'><a>HydroWhales</a></Link> launchpad project</p>}
      />
    }} />
  )
}

export default Project79
