import type { NextPage } from 'next'
import { Bar, Line } from 'react-chartjs-2';
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
import { default as burlcoreEarnings } from '../../data/projects/project79/burlcore/earnings'

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
      <Bar
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
  // Burlcore
  const burlcoreEarnData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  burlcoreEarnings.forEach(value => { burlcoreEarnData.labels.push(value.label); burlcoreEarnData.data.push(value.ethereum?.usdc) })

  const dollarIcon = <ModeSwitchingIcon filename='dollar-sign' size={12} scheme='gold' />

  return (
    <>
      {/* Earnings */}
      <div className='project-card'>
        <h2 className='card__header dark:text-gold flex'>{dollarIcon} Burlcore Earnings</h2>
        <P79Chart
          labels={burlcoreEarnData.labels}
          title='Earnings'
          data={burlcoreEarnData.data}
        />
        <div className='flex justify-between'>
          <span className='dark:text-gold'>Average: {average(burlcoreEarnData.data)}</span>
          <span className='dark:text-gold'>Latest: {burlcoreEarnData.data[burlcoreEarnData.data.length - 1]}</span>
        </div>
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
