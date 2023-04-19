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
import NewsListing from '../../Components/NewsListing';
import ExternalLink from '../../Components/ExternalLink';

import { Project79 as Project } from '../../data/projects';
import tvl from '../../data/projects/project79/tvl'
import earnings from '../../data/projects/project79/earnings'
import news from '../../data/projects/project79/news'
import FullPage from '../../Components/FullPage';
import Feed from '../../Components/Project/Feed';

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
      <div className='project-card'>
        <h2 className='card__header dark:text-gold flex'>{dollarIcon} Earnings</h2>
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
      <div className='project-card'>
        <h2 className='card__header dark:text-gold flex'>{dollarIcon} TVL (Sacrifice Model)</h2>
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
      <Feed entries={news} />
    </>
  )

  return (
    <FullPage {...{
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
      />,
      sidebarContent: (
        <>
          <Sidebar project={Project}>
            <StatsContent />
            <div className='project-card'>
              <h2 className='card__header dark:text-gold mb-2'>Related Projects</h2>
              <ul className='card__content'>
                <li><Link className='text-sm' href='/projects/hydro-whales'>Hydro Whales Mining Club</Link></li>
                <li><Link className='text-sm' href='/projects/ocean-money'>Ocean Money</Link></li>
              </ul>
            </div>
            <div className='project-card'>
              <h2 className='card__header dark:text-gold mb-2'>Related Links</h2>
              <ul className='card__content'>
                <li><ExternalLink className='text-sm' href='https://www.chainlinkecosystem.com/ecosystem/burlcore-mining-company' text='Chainlink: Burlcore Mining Company' /></li>
                <li><ExternalLink className='text-sm' href='https://www.burlcoremining.com/' text='Burlcore Mining' /></li>
                <li><ExternalLink className='text-sm' href='https://burlcore.com/' text='Burlcore' /></li>
                <li><ExternalLink className='text-sm' href='https://philburley.com/' text='Phil Burley' /></li>
              </ul>
            </div>
          </Sidebar>
        </>
      )
    }} />
  )
}

export default Project79
