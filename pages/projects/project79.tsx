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
import Percentage from '../../Components/Percentage';
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon';
import Sidebar from '../../Components/Project/Sidebar';
import { Project79 as Project } from '../../data/projects';

import tvl from '../../data/projects/project79/tvl'
import earnings from '../../data/projects/project79/earnings'
import news from '../../data/projects/project79/news'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function average(nums: number[]): number {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

const NewsContent = () => {
  return (
    <>
      {
        news.map((entry, index) => {
          return <p className='mb-2 text-xs' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
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

  const dollarIcon = <ModeSwitchingIcon filename='dollar-sign' size={12} scheme='gold' />

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2 className='dark:text-gold flex'>{dollarIcon} Earnings</h2>
        <P79Chart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData.data}
        />
        <div className='flex justify-between'>
        <span className='dark:text-gold'>Average: {Percentage(average(earningsData.data))}</span>
        <span className='dark:text-gold'>Latest: {Percentage(earningsData.data[earningsData.data.length - 1])}</span>
        </div>
        
      </div>
    
      {/* TVL */}
      <div className='card'>
        <h2 className='dark:text-gold flex'>{dollarIcon} TVL (Sacrifice Model)</h2>
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
  const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} scheme='gold' />

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <div className='card'>
          <h2 className='dark:text-gold flex mb-2'>{newsIcon} News</h2>
          <NewsContent />
        </div>
        <Sidebar project={Project}>
          <StatsContent />
          <div className='card'>
            <h2 className='dark:text-gold mb-2'>Related Projects</h2>
            <ul>
              <li><Link href='/projects/hydro-whales'>Hydro Whales Mining Club</Link></li>
              <li><Link href='/projects/ocean-money'>Ocean Money</Link></li>
            </ul>
          </div>
        </Sidebar>
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
        description={<p>A <Link href='/projects/hydro-whales'>HydroWhales</Link> launchpad project</p>}
        twitter='Project79Gold'
      />
    }} />
  )
}

export default Project79
