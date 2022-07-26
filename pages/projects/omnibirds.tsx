import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
import Header from '../../Components/Project/Header'
import { OMNIBirds as Project } from '../../data/projects'

const doxxed = () => {
  return (
    <>
      Core team fully <abbr title='Doxxed means personal data is available about team members, photo, work history, social media profiles etc.'>doxxed</abbr>: <ExternalLink href='https://www.omnimoney.io/about-us' />
    </>
  )
}

const Research = () => {
  const tick = '✅'
  const warn = '⚠️'

  const author = PrivateSniper

  const goodPoints = [
    { key: 'doxxed', content: doxxed() },
    { key:'whitepaper', content: 'Full whitepaper' },
  ]

  const redFlags = []

  const score = 10

  const overview = {
    project: 'OMNI Birds',
    slug: 'omnibirds',
    researcher: PrivateSniper,
    points: { good: goodPoints.length, bad: redFlags.length },
    score
  }

  const researchContent = (
    <div className='guide'>
      <Disclaimer />
      TLDR: Overall Rating: 🟩 (10) Excellent
      <p>TLDR: What is this about?: NFT provides lifetime access to OMNI money application, OMNI will be the hub for financial education and a single overview of all of your assets and liabilities, complete net worth.</p>
      <h2 className='text-secondary'>Links</h2>
      <ul>
        <li>Official Website: <ExternalLink href='https://www.omnibirds.com/' /></li>
        <li>OpenSea: <ExternalLink href='https://opensea.io/collection/omnibirds-official' /></li>
        <li><ExternalLink href='http://discord.gg/omnibirds' text='Discord' /></li>
      </ul>
      <h2 className='text-secondary'>Good Factors</h2>
      <ul>
        {goodPoints.map(good => (<li key={good.key}>{tick}{good.content}</li>))}
      </ul>
      <h2 className='text-secondary'>Red Flags?</h2>
      <ul>
        {redFlags.length === 0 && <li>{tick} None found for this project.</li>}
      </ul>
      <h2 className='text-secondary'>Potential Risks</h2>
    </div>
  )

  return (
    <main className='max-w-7xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
      <div className='xl:grid grid-cols-[70%,1fr] gap-16'>
        <div>
          <h1 className='mb-6'>OMNIBirds Research by PrivateSniper</h1>
          {researchContent}
        </div>
        {author && (
          <aside>
            <h2 className='mb-2'>About the author</h2>
            <AuthorComponent {...author} />
          </aside>
        )}
      </div>
      {/* {
        withCommenting === true && (
          <Discussion slug={slug} title={title} />
        )
      } */}
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

const OMNIBirds: NextPage = () => {
  const title = 'OMNIBirds'
  const tabs = [
    {
      title: 'News',
      content: (
        <>
          
        </>
      )
    },
    {
      title: 'Research',
      content: <Research />
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
      slug: 'projects/omnibirds',
      description: 'OMNIBirds',
      header: <Header {...Project} />
    }} />
  )
}

export default OMNIBirds
