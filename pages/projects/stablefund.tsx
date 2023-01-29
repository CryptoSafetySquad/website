
import Page from '../../Components/Page'
import Contracts from '../../Components/Project/Contracts'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

import { StableFund as Project } from '../../data/projects/stablefund/stablefund'

import type { NextPage } from 'next'
import type { NewsEntry } from '../../types/newsEntry'

const NewsContent = () => {
  return (
    <>
    {
      Project.news.map((entry: NewsEntry, index: number) => {
        return <p className='mb-2 text-xs' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
      })
    }
    </>
  )
}

const Stablefund: NextPage = () => {
  const title = 'StableFund (Rug Pulled)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <div className='card'>
            <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
            <ul>
              {Project.redflags?.map((redflag, index) => <li className='text-xs mb-2' key={index}>&bull; {redflag}</li>)}
            </ul>
          </div>
          <div className='card'>
            <h2 className='mb-2'><ModeSwitchingIcon filename='newspaper' size={20} /> News</h2>
            <NewsContent />
          </div>
        </main>
        <aside>
          <div className='card'>
            <h2 className='mb-2'>Domains</h2>
            {Project.domains?.map(domain => <p key={domain} className='text-xs'>{domain}</p>)}
          </div>
          <Contracts title='Tokens' contracts={Project.tokens} />
        </aside>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/stablefund',
      description: 'StableFund'
    }} />
  )
}

export default Stablefund
