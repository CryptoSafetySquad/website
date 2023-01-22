import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { YieldNodes as Project } from '../../data/projects'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const NewsContent = () => {
  const news: any[] = [
    { date: '21/01/2023', content: (<><a href='https://www.youtube.com/watch?v=WloTzNdx8hI' rel='noopener noreferrer' target='_blank'>YNP Update video</a></>) },
    { date: '11/10/2022', content: (<>Email announcing &quot;YieldNodes Pro&quot; restructuring.</>) },
  ]
  return (
    <>
    {
      news.map((entry, index) => {
        return <p className='mb-2 text-xs' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
      })
    }
    </>
  )
}

const FCA = 'https://www.fca.org.uk/'
const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const YieldNodes: NextPage = () => {
  const title = 'YieldNodes (Failed)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <div className='card'>
            <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
            <ul>
              <li className='text-xs mb-2'>&bull; Lots of &quot;pointless&quot; coins being masternoded to generate profit but with no real use cases.</li>
              {/* <li className='text-xs mb-2'>&bull; Undoxxed</li>
              <li className='text-xs mb-2'>&bull; Website creates and stores wallet private keys</li>
              <li className='text-xs mb-2'>&bull; (Subjective) Cult-like (probably bots) atmosphere in social media chats.</li> */}
            </ul>
          </div>
          <div className='card'>
            <h2 className='mb-2'>{newsIcon} News</h2>
            <NewsContent />
          </div>
        </main>
        <aside>
          <div className='card'>
            <h2 className='mb-2'>Domains</h2>
            <p>yieldnodes.com</p>
          </div>
          <div className='card'>
            <h2 className='mb-2'>Contracts / Tokens</h2>
          </div>
        </aside>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/yieldnodes',
      description: 'YieldNodes'
    }} />
  )
}

export default YieldNodes
