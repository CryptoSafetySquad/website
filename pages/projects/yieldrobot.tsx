import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { StableFund as Project } from '../../data/projects'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'


const NewsContent = () => {
  const news: any[] = [
    { date: '07/01/2023', content: (<>Featured on James Pelton&apos;s channel - <a href='https://www.youtube.com/watch?v=eR6Ub8gTOVo' rel='noopener noreferrer' target='_blank'>video</a></>) },
    // { date: '25/10/2022', content: () },
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

const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} />

const YieldRobot: NextPage = () => {
  const title = 'YieldRobot (Ultra High Risk: Rug Pull)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <div className='card'>
            <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
            <ul>
              <li className='text-xs mb-2'>&bull; Undoxxed</li>
              <li className='text-xs mb-2'>&bull; Unrealistic long-term daily rewards</li>
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
            <p className='text-xs'>yieldrobot.app</p>
          </div>
          <div className='card'>
            <h2 className='mb-2'>Contracts / Tokens</h2>
            <p className='text-xs'>Contract: <a target='_blank' rel='noopener noreferrer' href='https://bscscan.com/address/0xb8CDa6AE6D005d56205B29797ADD341c85e59608'>YieldRobot</a> (BSC)</p>
          </div>
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
