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
import earnings from '../../data/projects/aceminers/earnings'
import { BoredApeYachtClub as Project } from '../../data/projects'

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
  const news: any[] = [
    // { date: '4/11/2022', content: '' },
    // { date: '29/10/2022', content: () },
    // { date: '24/10/2022', content: '' },
    // { date: '20/10/2022', content: '' }
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

const Chart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
  const chartHeight = '175px'
  return (
    <div style={{ height: chartHeight }}>
      <Line
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              // borderColor: '#b49b68',
              // backgroundColor: '#b49b68',
            }
          ],
        }}
      />
    </div>
  )
}

const StatsContent = () => {
  // Compile earnings data
  const earningsData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  earnings.forEach(value => { earningsData.labels.push(value.label); earningsData.data.push(value.amount) })

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2>Earnings</h2>
        <Chart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData.data}
        />
        <div className='flex justify-between'>
        <span>Average: ${average(earningsData.data)}</span>
        <span>Latest: ${earningsData.data[earningsData.data.length - 1]}</span>
        </div>
        
      </div>
    
      {/* TVL
      <div className='card'>
        <h2>TVL</h2>
        <P79Chart
          labels={tvlData.labels}
          title='TVL'
          data={tvlData.data}
        />
      </div> */}
    </>
  )
}

const BoredApeYachtClub: NextPage = () => {
  const title = 'Bored Ape Yacht Club'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <div className='card'>
          <h2 className=''>News</h2>
          <NewsContent />
        </div>
        {/* <div>
          <StatsContent />
        </div> */}
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/boredapeyachtclub',
      description: 'Bored Ape Yacht Club',
      header: <Header {...Project} />
    }} />
  )
}

export default BoredApeYachtClub
