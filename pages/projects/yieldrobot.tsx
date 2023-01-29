import type { NextPage } from 'next'

import Page from '../../Components/Page'
import Contracts from '../../Components/Project/Contracts'

import { YieldRobot as Project } from '../../data/projects/yieldrobot/yieldrobot'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import { NewsEntry } from '../../types/newsEntry'
import RedFlagCard from '../../Components/Project/RedFlagCard'


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

const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const YieldRobot: NextPage = () => {
  const title = 'YieldRobot (Rug Pulled)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <RedFlagCard redflags={Project.redflags} />
          <div className='card'>
            <h2 className='mb-2'><ModeSwitchingIcon filename='flag' /> Green Flags</h2>
            <ul>
              <li className='text-xs mb-2'>&bull; Contract code is fully published</li>
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
            {Project.domains?.map(domain => <p key={domain} className='text-xs'>{domain}</p>)}
          </div>

          <Contracts title='Contracts' contracts={Project.contracts} />
        </aside>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/yieldrobot',
      description: 'YieldRobot'
    }} />
  )
}

export default YieldRobot
