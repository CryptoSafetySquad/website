import type { NextPage } from 'next'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'Project 79', slug: 'project79', type: 'Passive Income', blockchain: 'Ethereum'},
  {name: 'Ocean Money', slug: 'ocean-money', type: 'Banking Services, Crypto Services', blockchain: 'N/A'},
  {name: 'OMNIBirds', slug: 'omnibirds', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'Ace Miners NFT', slug: 'aceminers', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum'},
]

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
    <>
      <p>The projects here are just those we have done some research into, the content herein does not constitute financial advice</p>
      <p>Please do your own research before investing, we can take no responsibility for the performance of any investments you make.</p>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        projects.map(project => 
          <div className='card' key={project.slug}>
            <p><a href={`/projects/${project.slug}`}>{project.name}</a></p>
            <div className='flex justify-between'>
              <span>{project.type}</span>
              <span>{project.blockchain == 'N/A' ? `` : `Chain: ${project.blockchain}`}</span>
            </div>
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
      slug: 'research',
      description: 'Research'
    }} />
  )
}

export default Projects
