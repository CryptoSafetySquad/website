import type { NextPage } from 'next'
import Link from 'next/link'
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

import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'

import HydroWhalesResearch from '../../data/projects/hydrowhales/research'
import { HydroWhalesMiningClub } from '../../data/projects/hydrowhales/hydrowhales'
import Sidebar from '../../Components/Project/Sidebar';

import { EarningsEntry } from '../../types/EarningsEntry';
import type { Project } from '../../types/project';
import type { NewsEntry } from '../../types/NewsEntry';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const doxxed = () => {
  return (
    <>
      Core team fully <abbr title='Doxxed means personal data is available about team members, photo, work history, social media profiles etc.'>doxxed</abbr>: <ExternalLink href='https://www.hydrowhalesclub.com/#team' />
    </>
  )
}

const Research = () => {
  const tick = '✅'
  const warn = '⚠️'

  const author = PrivateSniper
  const goodPoints = [
    { key: 'doxxed', content: doxxed() },
    { key:'legal', content: 'Has legal team on retainer' },
    { key:'whitepaper', content: 'Full whitepaper' },
    { key:'wayback', content: (<>Website content is captured in <ExternalLink href='https://web.archive.org/web/20220711192706/https://www.hydrowhalesclub.com/' text='wayback machine' /></>) }
  ]

  const researchContent = (
    <div className='guide'>
      <img className='mb-4' src='/images/logos/hwmc_os_logo.png' />
      <Disclaimer />
      <p className='text-sm'>TLDR: Overall Rating: 🟩 ({HydroWhalesResearch.score}) Excellent</p>
      <p className='text-sm'>TLDR: What is this about?: A passive income focused community, powered by bitcoin mining and community voted investments.</p>
      <h2 className='text-secondary'>Links</h2>
      <ul>
        <li className='text-sm'>Official Website: <ExternalLink href='https://www.hydrowhalesclub.com/' /></li>
        <li className='text-sm'>Official Dashboard: <ExternalLink href='https://dashboard.hydrowhalesclub.com/' /></li>
        <li className='text-sm'>OpenSea: <ExternalLink href='https://opensea.io/collection/hydro-whales-mining-club-official' /></li>
        <li className='text-sm'><ExternalLink href='https://discord.gg/hydrowhales' text='Discord' /></li>
      </ul>
      <h2 className='text-secondary'>Good Factors</h2>
      <ul>
        {goodPoints.map(good => (<li  className='text-sm' key={good.key}>{tick}{good.content}</li>))}
      </ul>
      <h2 className='text-secondary'>Red Flags?</h2>
      <ul>
        <li className='text-sm'>{tick} None found for this project.</li>
      </ul>
      <h2 className='text-secondary'>Potential Risks</h2>
      <p className='text-sm'>{warn} As with any crypto project, the underlying assets (BTC) could decrease in price, so your rewards for being a holder are not gauranteed to be stable consistently.</p>
    </div>
  )

  return (
    <main className='max-w-7xl m-auto bg-dark rounded-md'>
      <div className='xl:grid grid-cols-[70%,1fr] gap-16'>
        <div>
          <h1 className='mb-6'>Hydro Whales Research by PrivateSniper</h1>
          {researchContent}
        </div>
        {author && (
          <aside>
            <h2 className='mb-2'>About the author</h2>
            <AuthorComponent {...author} />
          </aside>
        )}
      </div>
    </main>
  )
}

const NewsContent = () => {
  return (
    <>
      {
        HydroWhalesMiningClub.news.map((entry: NewsEntry, index: number) => {
          return <p className='mb-2 text-xs' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
        })
      }
    </>
  )
}

const HWChart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
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
  const earningsData: { labels: string[]; data: number[] } = { labels: [], data: [] }
  project.earnings.forEach((entry: EarningsEntry) => { earningsData.labels.push(entry.label); earningsData.data.push(entry.value) })

  return (
    <>
      {/* Earnings */}
      <div className='card'>
        <h2>Earnings</h2>
        <HWChart
          labels={earningsData.labels}
          title='Earnings'
          data={earningsData.data}
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
      content: <NewsContent />
    },
    {
      title: 'Research',
      content: <Research />
    },
  ]

  if (HydroWhalesMiningClub.officialVideos) {
    tabs.push({
      title: 'Official Videos',
      content: (
        <div className='grid md:grid-cols-3 gap-4'>
          {HydroWhalesMiningClub.officialVideos.map(video => (
            <div key={video.youtubeSlug}>
            <iframe  width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
        <div className='grid md:grid-cols-3 gap-4'>
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
