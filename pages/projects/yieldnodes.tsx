import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { default as ProjectPage } from '../../Components/Project/Page'
import { YieldNodes as Project } from '../../data/projects/yieldnodes/yieldnodes'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import RedFlagCard from '../../Components/Project/RedFlagCard'
import NewsListing from '../../Components/NewsListing'
import ExternalLink from '../../Components/ExternalLink'

const news: any[] = [
  { date: '21/01/2023', content: (<><a href='https://www.youtube.com/watch?v=WloTzNdx8hI' rel='noopener noreferrer' target='_blank'>YNP Update video</a></>) },
  { date: '11/10/2022', content: (<>Email announcing &quot;YieldNodes Pro&quot; restructuring.</>) },
]

const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const YieldNodes: NextPage = () => {
  const title = 'YieldNodes (Failed)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <RedFlagCard redflags={Project.redflags} />
          <div className='card'>
            <h2 className='mb-2'>{newsIcon} News</h2>
            <NewsListing newsEntries={news} />
          </div>
        </main>
        <aside>
          <div className='card'>
            <h2 className='mb-2'>Domains</h2>
            <p className='text-xs'><ExternalLink href='https://yieldnodes.com/' text='yieldnodes.com' /></p>
          </div>
        </aside>
      </div>
    </>
  )

  return <ProjectPage project={Project} />

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
