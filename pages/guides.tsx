import type { NextPage } from 'next'
import Page from '../Components/Page'

const guides = [
  {
    name: 'Security', guides: [
      {type: 'article', name: 'Ad-blocking with uBlock Origin and Installing CryptoSafetySquad AdBlock filters', slug: 'adblock'},
      {type: 'article', name: 'Discord: Disable DMs from server members.', slug: 'discorddm'},
    ]
  }
]

const Guides: NextPage = () => {
  const title = 'Guides'
  const content = (
    <div className='grid grid-cols-1 gap-4'>
      {
        guides.map(section =>
          <div key={section.name} className='project-card'>
            <h2 className='card__header'>{section.name}</h2>
            <div className='card__content gap-4 grid grid-cols-2 md:grid-cols-3'>
              {section.guides.map(guide =>
                <>
                  {/* {guide.type === 'video' && (
                    <div className='card p-4' key={guide.ytVideo}>
                      <a className='text-lg' href={`/guides/${guide.slug}`}>{guide.name}</a>
                    </div>
                  )} */}
                  {guide.type === 'article' && (
                    <div className='card p-4' key={guide.slug}>
                      <a className='text-lg' href={`/guides/${guide.slug}`}>{guide.name}</a>
                    </div>
                  )}
                </>
              )}
            </div>
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
