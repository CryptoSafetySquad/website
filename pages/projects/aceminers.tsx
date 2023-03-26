import type { NextPage } from 'next'
import { Bar, Line } from 'react-chartjs-2';
import Link from 'next/link'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Page from '../../Components/Page'
import Contracts from '../../Components/Project/Contracts';
import Header from '../../Components/Project/Header'
import Sidebar from '../../Components/Project/Sidebar';
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon';
import NewsListing from '../../Components/NewsListing';

import earnings from '../../data/projects/aceminers/earnings'
import { AceMinersNFT as Project } from '../../data/projects/aceminers/aceminers';
import news from '../../data/projects/aceminers/news'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
      <NewsListing newsEntries={news} />
    </>
  )
}

const Chart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
  const chartHeight = '175px'
  return (
    <div style={{ height: chartHeight }}>
      <Bar
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            }
          }
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: 'wETH (Polygon)',
              data: data.polygon.weth,
              borderWidth: 2,
              borderRadius: 0,
              borderColor: '#2f1a52', // Polygon Purple
              backgroundColor: '#fff',
              stack: 'SingleReward'
            },
            {
              label: 'KDA',
              data: data.kda,
              // borderColor: '#2f1a52',
              backgroundColor: '#ED098F', // KDA Pink
              stack: 'Multi'
            },
            {
              label: 'LTC',
              data: [],
              borderColor: '',
              backgroundColor: '#88cbf5',
              stack: 'Multi'
            },
            {
              label: 'Nervos',
              data: [],
              borderColor: '',
              backgroundColor: '#18efb1',
              stack: 'Multi'
            }
          ],
        }}
      />
    </div>
  )
}

const StatsContent = () => {
  // Compile earnings data
  const earningsData: { labels: string[]; polygon: { weth: number[] }, kda: number[] } = { labels: [], polygon: { weth: [] }, kda: [] }
  earnings.forEach(value => {
    earningsData.labels.push(value.label);
    if (typeof value.polygon?.weth == 'number') { earningsData.polygon.weth.push(value.polygon.weth) } else { earningsData.polygon.weth.push(0) }
    if (typeof value.kda == 'number') { earningsData.kda.push(value.kda) } else { earningsData.kda.push(0) }
  })

  const dollarIcon = <ModeSwitchingIcon size={12} filename='dollar-sign' />

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2>{dollarIcon} Earnings</h2>
        <Chart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData}
        />
        <div className='flex justify-between'>
        <span>Average: ${average(earningsData.polygon.weth)}</span>
        <span>Latest: ${earningsData.polygon.weth[earningsData.polygon.weth.length - 1]}</span>
        </div>
        
      </div>
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
