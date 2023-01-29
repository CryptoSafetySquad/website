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
import Contracts from '../../Components/Project/Contracts';
import Header from '../../Components/Project/Header'
import earnings from '../../data/projects/aceminers/earnings'
import { AceMinersNFT as Project } from '../../data/projects/aceminers/aceminers';
import news from '../../data/projects/aceminers/news'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon';
import Sidebar from '../../Components/Project/Sidebar';

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
  const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />
  
  return (
    <>
      <h2 className='mb-2'>{newsIcon} News</h2>
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

  const dollarIcon = <ModeSwitchingIcon size={12} filename='dollar-sign' />

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2>{dollarIcon} Earnings</h2>
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

const AceMiners: NextPage = () => {
  const title = 'Ace Miners NFT'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <div className='card'>
          <NewsContent />
        </div>
        <Sidebar project={Project}>
          <StatsContent />
        </Sidebar>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/aceminers',
      description: 'Ace Miners NFT',
      header: <Header
        description={(<>LTC and KDA mining NFT - Also has a Phase 2 NFT @<a href='https://opensea.io/collection/aceminersnftp2' target='_blank' rel='noopener noreferrer'>OpenSea</a></>)}
        {...Project}
      />
    }} />
  )
}

export default AceMiners
