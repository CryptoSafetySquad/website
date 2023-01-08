import type { NextPage } from 'next'

import Page from '../../Components/Page'
import { StableFund as Project } from '../../data/projects'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon'

const NewsContent = () => {
  const news: any[] = [
    { date: '27/12/2022', content: (<>StableFund v2 rug pulls - <a href='https://www.youtube.com/watch?v=fT3u-Mm2GTE' rel='noopener noreferrer' target='_blank'>Rug reaction video</a></>) },
    { date: '25/10/2022', content: (<>StableFund v1 rug pulls? - <a href='https://www.youtube.com/watch?v=MC6us9pon3I' rel='noopener noreferrer' target='_blank'>Research video</a></>) },
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

const Stablefund: NextPage = () => {
  const title = 'StableFund (Rug Pulled)'

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <main>
          <div className='card'>
            <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
            <ul>
              <li className='text-xs mb-2'>&bull; Undoxxed</li>
              <li className='text-xs mb-2'>&bull; <a href='https://find-and-update.company-information.service.gov.uk/company/14099508' target='_blank' rel='noopener noreferrer'>Registered UK business</a> BUT not <a href={FCA}>FCA</a> regulated</li>
              <li className='text-xs mb-2'>&bull; Website creates and stores wallet private keys</li>
              <li className='text-xs mb-2'>&bull; Unrealistic long-term daily rewards</li>
              <li className='text-xs mb-2'>&bull; (Subjective) Cult-like (probably bots) atmosphere in social media chats.</li>
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
            <p className='text-xs'>sfusd.io</p>
            <p className='text-xs'>stablefund.app</p>
            <p className='text-xs'>stableone.io</p>
            <p className='text-xs'>srockettoken.io</p>
            <p className="text-xs">sdragonsden.io</p>
          </div>
          <div className='card'>
            <h2 className='mb-2'>Contracts / Tokens</h2>
            <p className='text-xs'>Token: <a target='_blank' rel='noopener noreferrer' href='https://polygonscan.com/token/0x93fee753b548b4cf93c41ada062f80de12710db8'>SFUSD</a> (Polygon)</p>
            <p className='text-xs'>Token: <a target='_blank' rel='noopener noreferrer' href='https://polygonscan.com/token/0x94788309d420ad9f9f16d79fc13ab74de83f85f7'>SROCKET</a> (Polygon)</p>
          </div>
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
