import type { NextPage } from 'next'
import Link from 'next/link'
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';

import Page from '../../Components/Page'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import NewsListing from '../../Components/NewsListing';

import { HydroWhalesMiningClub } from '../../data/projects/hydrowhales/hydrowhales'
import Sidebar from '../../Components/Project/Sidebar';

import type { Project } from '../../types/project';
import type { EarningsEntry } from '../../types/EarningsEntry';

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

const HWChart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
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
            // {
            //   label: 'Total ($)',
            //   data: data.total,
            //   backgroundColor: 'rgba(100, 100, 255, 0.4)'
            // },
            {
              label: 'wBTC (Eth) ($)',
              data: data.ethereum.wbtc,
              backgroundColor: '#FF9500',
              // borderColor: '#fff',
              borderWidth: 0,
              // borderRadius: 0,
              stack: 'Primary', // 'Bluechip'
            },
            {
              label: 'USDC (Eth)',
              data: data.ethereum.usdc,
              backgroundColor: '#2775CA',
              // borderColor: '#fff',
              borderWidth: 0,
              // borderRadius: 0,
              stack: 'Primary', // 'Stablecoin'
            },
            {
              label: 'wBTC (Poly) ($)',
              data: data.polygon.wbtc,
              borderColor: '#2f1a52', // Polygon Purple
              borderWidth: 2,
              borderRadius: 0,
              backgroundColor: '#FF9500',
              stack: 'Primary', // 'Bluechip'
            },
            {
              label: 'USDC (Poly)',
              data: data.polygon.usdc,
              borderColor: '#2f1a52', // Polygon Purple
              borderWidth: 2,
              borderRadius: 0,
              backgroundColor: '#2775CA',
              stack: 'Primary', // 'Stablecoin'
            }
          ],
        }}
      />
    </div>
  )
}

const StatsContent = ({ project }: { project: Project }) => {
  if (!project.earnings) { return null }

  // Compile earnings data
  const earningsData: { labels: string[]; ethereum: { wbtc: number[]; usdc: number[]; }; polygon: { wbtc: number[]; usdc: number[]; }; total: number[]; } = {
    labels: [], ethereum: { wbtc: [], usdc: [] }, polygon: { wbtc: [], usdc: [] }, total: []
  }
  project.earnings.forEach((entry: EarningsEntry) => {
    earningsData.labels.push(entry.label);
    earningsData.ethereum.usdc.push(entry.ethereum?.usdc || 0);
    earningsData.ethereum.wbtc.push(entry.ethereum?.wbtc || 0);
    earningsData.polygon.usdc.push(entry.polygon?.usdc || 0);
    earningsData.polygon.wbtc.push(entry.polygon?.wbtc || 0);
    earningsData.total.push((entry.ethereum?.wbtc || 0) + (entry.ethereum?.usdc || 0));
  })

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2>Earnings</h2>
        <HWChart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData}
        />
      </div>
    </>
  )
}

const HydroWhales: NextPage = () => {
  const title = 'Hydro Whales Mining Club'
  const tabs = [
    {
      title: 'News',
      content: <NewsListing newsEntries={HydroWhalesMiningClub.news} />
    }
  ]

  if (HydroWhalesMiningClub.officialVideos) {
    tabs.push({
      title: 'Official Videos',
      content: (
        <div className='grid md:grid-cols-3 gap-4 text-sm'>
          {HydroWhalesMiningClub.officialVideos.map(video => (
            <div key={video.youtubeSlug}>
            <iframe width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {video.title}
          </div>
          ))}
        </div>
      )
    })
  }

  if (HydroWhalesMiningClub.communityVideos) {
    tabs.push({
      title: 'Community Videos',
      content: (
        <div className='grid md:grid-cols-3 gap-4 text-sm'>
          {HydroWhalesMiningClub.communityVideos.map(video => (
            <div key={video.youtubeSlug}>
            <iframe width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {video.title}
          </div>
          ))}
        </div>
      )
    })
  }

  if (HydroWhalesMiningClub.answers) {
    tabs.push({
      title: 'FAQs',
      content: <Answers qa={HydroWhalesMiningClub.answers} />
    })
  }

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main className='card'>
          <TabbedContent content={tabs} />
        </main>
        <Sidebar project={HydroWhalesMiningClub}>
          <StatsContent project={HydroWhalesMiningClub} />
          <div className='card'>
            <h2 className='mb-2'>Related Projects</h2>
            <ul>
              <li className='text-xs'><Link href='/projects/project79'>Project 79</Link> - Gold Arbitrage</li>
              <li className='text-xs'><Link href='/projects/ocean-money'>Ocean Money</Link> - Banking Services</li>
            </ul>
          </div>
          <div className='card'>
            <h2>Related Links</h2>
            <ul>
              <li><ExternalLink href='https://raritysniper.com/hydro-whales-mining-club' className='text-xs' text='Rarity Sniper' /></li>
              <li><ExternalLink href='https://github.com/CryptoSafetySquad/research/blob/main/ethereum/hydrowhales-privatesnipers-research.md' className='text-xs' text='HWMC Research by PrivateSniper' /></li>
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
      slug: 'projects/hydro-whales',
      description: 'Hydro Whales Mining Club',
      header: <Header {...HydroWhalesMiningClub} />
    }} />
  )
}

export default HydroWhales
