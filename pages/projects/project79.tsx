import type { NextPage } from 'next'
import { Line } from 'react-chartjs-2';
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
import { default as Project } from '../../data/projects/project79/project79';

import { default as ProjectPage } from '../../Components/Project/Page';
import Percentage from '../../Components/Percentage';
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon';
import tvl from '../../data/projects/project79/tvl'
import earnings from '../../data/projects/project79/earnings'
import news from '../../data/projects/project79/news'
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
  return <ProjectPage
    project={Project}
    sidebar={<StatsContent />}
  />
}

export default Project79
