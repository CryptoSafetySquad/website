import type { NextPage } from 'next'
import Page from '../Components/Page'

const videos = [
  // {url: '', title: '', category: '', date: ''},
  {url: 'https://www.youtube.com/watch?v=_eLpirvCewU', title: 'CryptoSafe - YieldRobot Red Flags', category: 'Project Research', date: '2023-01-07'},
  {url: 'https://www.youtube.com/watch?v=VmjpigjKz9k', title: 'CryptoSafe - Common Hacks: Fake mint website', category: 'Common Scams', date: '2022-11-11'},
  {url: 'https://www.youtube.com/watch?v=MC6us9pon3I', title: 'CryptoSafe - StableFund Research and Red Flags', category: 'Project Research', date: '2022-10-25'},
]

const Videos: NextPage = () => {
  const title = 'Videos'
  const content = (
    <>
      <div className='grid gap-2 grid-cols-3'>
      {
          videos.map(video => 
            <div className='card' key={video.url}>
              <p className='text-sm'><a href={video.url} rel='noopener noreferrer' target='_blank'>{video.title}</a></p>
              <span className='text-sm'>{video.category}</span>
            </div>
          )
        }
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'videos',
      description: 'Videos'
    }} />
  )
}

export default Videos
