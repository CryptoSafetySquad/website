import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
import answers from '../../data/projects/hydrowhales/answers'
import Answers from '../../Components/Answers'
import Header from '../../Components/Project/Header'

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

  const score = 10

  const author = PrivateSniper
  const goodPoints = [
    { key: 'doxxed', content: doxxed() },
    { key:'legal', content: 'Has legal team on retainer' },
    { key:'whitepaper', content: 'Full whitepaper' },
    { key:'wayback', content: (<>Website content is captured in <ExternalLink href='https://web.archive.org/web/20220711192706/https://www.hydrowhalesclub.com/' text='wayback machine' /></>) }
  ]
  
  const redFlags = []
  
  const overview = {
    project: 'Hydro Whales Mining Club',
    slug: 'hydro-whales',
    researcher: PrivateSniper,
    points: { good: goodPoints.length, bad: redFlags.length },
    score
  }

  const researchContent = (
    <div className='guide'>
      <img className='mb-4' src='/images/logos/hwmc_os_logo.png' />
      <Disclaimer />
      TLDR: Overall Rating: 🟩 ({score}) Excellent
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
    {
      title: 'News',
      content: <NewsContent />
    },
    {
      title: 'Research',
      content: <Research />
    },
    {
      title: 'FAQs',
      content: <Answers qa={answers} />
    }
  ]

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
