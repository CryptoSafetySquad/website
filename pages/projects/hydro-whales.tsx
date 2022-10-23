import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
import answers from '../../data/projects/hydrowhales/answers'
import { officialVideos, communityVideos } from '../../data/projects/hydrowhales/videos'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'
import HydroWhalesResearch from '../../data/projects/hydrowhales/research'
import Link from 'next/link'

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
      TLDR: Overall Rating: 🟩 ({HydroWhalesResearch.score}) Excellent
      <p>TLDR: What is this about?: A passive income focused community, powered by bitcoin mining and community voted investments.</p>
      <h2 className='text-secondary'>Links</h2>
      <ul>
        <li>Official Website: <ExternalLink href='https://www.hydrowhalesclub.com/' /></li>
        <li>Official Dashboard: <ExternalLink href='https://dashboard.hydrowhalesclub.com/' /></li>
        <li>OpenSea: <ExternalLink href='https://opensea.io/collection/hydro-whales-mining-club-official' /></li>
        <li><ExternalLink href='https://discord.gg/hydrowhales' text='Discord' /></li>
      </ul>
      <h2 className='text-secondary'>Good Factors</h2>
      <ul>
        {goodPoints.map(good => (<li key={good.key}>{tick}{good.content}</li>))}
      </ul>
      <h2 className='text-secondary'>Red Flags?</h2>
      <ul>
        <li>{tick} None found for this project.</li>
      </ul>
      <h2 className='text-secondary'>Potential Risks</h2>
      <p>{warn} As with any crypto project, the underlying assets (BTC) could decrease in price, so your rewards for being a holder are not gauranteed to be stable consistently.</p>
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
  const news = [
    { date: '', content: '' }
  ]
  return (
    <>
    {
      news.map((entry, index) => {
        return <div key={`news-item-${index}`}>{entry.content}</div>
      })
    }
    </>
  )
}

const HydroWhales: NextPage = () => {
  const title = 'Hydro Whales Mining Club'
  const tabs = [
    // {
    //   title: 'News',
    //   content: <NewsContent />
    // },
    {
      title: 'Research',
      content: <Research />
    },
  ]

  if (officialVideos.length > 0) {
    tabs.push({
      title: 'Official Videos',
      content: (
        <div className='grid grid-cols-3 gap-4'>
          {officialVideos.map(video => (
            <div key={video.youtubeSlug}>
            <iframe  width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {video.title}
          </div>
          ))}
        </div>
      )
    })
  }

  if (communityVideos.length > 0) {
    tabs.push({
      title: 'Community Videos',
      content: (
        <div className='grid grid-cols-3 gap-4'>
          {communityVideos.map(video => (
            <div key={video.youtubeSlug}>
            <iframe width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {video.title}
          </div>
          ))}
        </div>
      )
    })
  }

  tabs.push({
    title: 'FAQs',
    content: <Answers qa={answers} />
  })

  tabs.push({
    title: 'Related Projects',
    content: (
      <>
        <ul>
          <li><Link href='/projects/project79'><a>Project 79</a></Link> - Gold Arbitrage</li>
          <li><Link href='/projects/ocean-money'><a>Ocean Money</a></Link> - Banking Services</li>
        </ul>
      </>
    )
  })

  const content = (
    <>
      <TabbedContent content={tabs} />
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/hydro-whales',
      description: 'Hydro Whales Mining Club',
      header: (
        <Header
          name='Hydro Whales Mining Club'
          opensea='https://opensea.io/collection/hydro-whales-mining-club-official'
          website='https://www.hydrowhalesclub.com/'
        />
      )
    }} />
  )
}

export default HydroWhales
