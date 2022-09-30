import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'
import TabbedContent from '../../Components/TabbedContent'
import AuthorComponent from '../../Components/Author'
import Disclaimer from '../../Components/Research/Disclaimer'
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
      <p>See research for <Link href='/projects/hydro-whales'><a>Hydro Whales Mining Club</a></Link> as is ran by the same team.</p>
    </div>
  )

  return (
    <main className='max-w-7xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
      <div>
        <h1 className='mb-6'>Project 79 Research</h1>
        {researchContent}
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

const Project79: NextPage = () => {
  const title = 'Project 79'
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
      slug: 'projects/project79',
      description: 'Project 79'
    }} />
  )
}

export default Project79