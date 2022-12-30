import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { StableFund as Project } from '../../data/projects'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const NewsContent = () => {
  const news: any[] = [
    // { date: '27/12/2022', content: (<>StableFund v2 rug pulls - <a href='https://www.youtube.com/watch?v=fT3u-Mm2GTE' rel='noopener noreferrer' target='_blank'>Rug reaction video</a></>) },
    // { date: '25/10/2022', content: (<>StableFund v1 rug pulls? - <a href='https://www.youtube.com/watch?v=MC6us9pon3I' rel='noopener noreferrer' target='_blank'>Research video</a></>) },
  ]
  return (
    <>
    {
      news.map((entry, index) => {
        return <p className='mb-0 text-sm' key={`news-item-${index}`}>{entry.date} - {entry.content}</p>
      })
    }
    </>
  )
}

const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const Drip: NextPage = () => {
  const title = 'DRIP'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <div className='card'>
            <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
            <ul>
              <li>&bull; Undoxxed</li>
            </ul>
          </div>
          <div className='card'>
            <h2 className='mb-2'>{newsIcon} News</h2>
            <NewsContent />
          </div>
        </main>
        <aside>
          <div className='card'>
            <h2>Domains</h2>
            <p>drip.community</p>
          </div>
          <div className='card'>
            <h2>Contracts / Tokens</h2>
            <p>Token: <a href='https://bscscan.com/address/0x20f663cea80face82acdfa3aae6862d246ce0333' rel='noopener noreferrer'>DRIP</a></p>
          </div>
        </aside>
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
