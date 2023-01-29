import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { DRIP as Project } from '../../data/projects/drip/drip'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'
import Sidebar from '../../Components/Project/Sidebar'
import { NewsEntry } from '../../types/newsEntry'
import RedFlagCard from '../../Components/Project/RedFlagCard'

const NewsContent = () => {
  if (!Project.news || Project.news.length === 0) { return null }

  return (
    <div className='card'>
      <h2 className='mb-2'>{newsIcon} News</h2>
      {
      Project.news.map((entry: NewsEntry, index: number) => {
        return <p className='mb-0 text-sm' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
      })
    }
    </div>
  )
}

const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const Drip: NextPage = () => {
  const title = 'DRIP'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <RedFlagCard redflags={Project.redflags} />
          <div className='card'>
            <h2 className='mb-2 text-orange dark:text-orange'><ModeSwitchingIcon filename='warning' scheme='orange' /> Warnings</h2>
            <ul>
              <li>&bull; DRIP token has historically trended down, see <a href='https://coinmarketcap.com/currencies/drip-network/' target='_blank' rel='noopener noreferrer'>CMC</a></li>
            </ul>
          </div>
          <NewsContent />
        </main>
        <Sidebar project={Project}>
          <div className='card'>
            <h2>Domains</h2>
            {Project.domains?.map(domain => <p key={domain} className='text-xs'>{domain}</p>)}
          </div>
        </Sidebar>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      header: (<div className='flex'>DRIP <img title='Binance Smart Chain' alt='Binance Smart Chain' className='ml-2' width='20' height='20' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg' /></div>),
      content,
      slug: 'projects/drip',
      description: 'DRIP'
    }} />
  )
}

export default Drip
