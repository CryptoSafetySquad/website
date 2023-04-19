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

import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import NewsListing from '../../Components/NewsListing';

import { HydroWhalesMiningClub } from '../../data/projects/hydrowhales/hydrowhales'
import Sidebar from '../../Components/Project/Sidebar';

import type { Project } from '../../types/project';
import type { EarningsEntry } from '../../types/EarningsEntry';
import FullPage from '../../Components/FullPage';
import Feed from '../../Components/Project/Feed';
import { YouTubeVideo } from '../../types/youtubeVideo';
import { buildFeed } from '../../functions/Project/buildFeed';

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
      <div className='project-card'>
        <h2 className='card__header'>Earnings</h2>
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

  // const feedItems = [
  //   ...HydroWhalesMiningClub.news
  // ]

  // function parseVideo(video: YouTubeVideo) {
  //   return {
  //     date: video.date,
  //     dateISO: video.dateISO,
  //     content: (
  //       <div key={video.youtubeSlug}>
  //         <iframe className='mb-2' width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  //         {video.title}
  //       </div>
  //     )
  //   }
  // }

  // if (HydroWhalesMiningClub.communityVideos) {
  //   HydroWhalesMiningClub.communityVideos.map(video => (
  //     feedItems.push(parseVideo(video))
  //   ))
  // }

  // if (HydroWhalesMiningClub.officialVideos) {
    // HydroWhalesMiningClub.officialVideos.map(video => (
    //   feedItems.push(parseVideo(video))
    // ))
  // }

  // feedItems.sort((a,b) => {
  //   return (new Date(a.dateISO).getTime()) - (new Date(b.dateISO).getTime());
  // }).reverse()

  const content = (
    <main>
      <Feed entries={buildFeed(HydroWhalesMiningClub)} />
    </main>
  )

  return (
    <FullPage {...{
      title,
      content,
      slug: 'projects/hydro-whales',
      description: 'Hydro Whales Mining Club',
      header: <Header {...HydroWhalesMiningClub} />,
      sidebarContent: (
        <>
          <Sidebar project={HydroWhalesMiningClub}>
            <StatsContent project={HydroWhalesMiningClub} />
            <div className='project-card'>
              <h2 className='card__header mb-2'>Related Projects</h2>
              <ul>
                <li className='text-xs'><Link href='/projects/project79'>Project 79</Link> - Gold Arbitrage</li>
                <li className='text-xs'><Link href='/projects/ocean-money'>Ocean Money</Link> - Banking Services</li>
              </ul>
            </div>
            <div className='project-card'>
              <h2 className='card__header'>Related Links</h2>
              <ul>
                <li><ExternalLink href='https://raritysniper.com/hydro-whales-mining-club' className='text-xs' text='Rarity Sniper' /></li>
                <li><ExternalLink href='https://github.com/CryptoSafetySquad/research/blob/main/ethereum/hydrowhales-privatesnipers-research.md' className='text-xs' text='HWMC Research by PrivateSniper' /></li>
              </ul>
            </div>
            <div className='project-card'>
              <h2 className='card__header'>FAQs</h2>
              <div className='card__content'>
                <Answers qa={HydroWhalesMiningClub.answers} />
              </div>
            </div>
          </Sidebar>
        </>
      )
    }} />
  )
}

export default HydroWhales
