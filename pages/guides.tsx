import type { NextPage } from 'next'
import Page from '../Components/Page'

const guides = [
  {name: 'Ad-blocking with uBlock Origin and Installing CryptoSafetySquad AdBlock filters', slug: 'adblock'},
  {name: 'Discord: Disable DMs from server members.', slug: 'discorddm'},
]

const Guides: NextPage = () => {
  const title = 'Guides'
  const content = (
    <div className='grid grid-cols-1 gap-4'>
      {
        guides.map(guide => 
          <div className='card p-4' key={guide.slug}>
            <a className='text-lg' href={`/guides/${guide.slug}`}>{guide.name}</a>
          </div>
        )
      }
    </div>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'guides',
      description: 'Guides'
    }} />
  )
}

export default Guides
