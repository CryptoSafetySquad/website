import type { NextPage } from 'next'
import Image from 'next/image'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum', banner: 'https://i.seadn.io/gae/rgToigCSJptmZH_aXssvgDJ7JLtSL0QqjfncgOgoNwjaZxOeS7qD5p6CB1Pdp1P3cUlouqnfQUCe2_ux_lljAc1GcVSLhBueuuelSnY?auto=format&w=1920'},
  {name: 'Project 79', slug: 'project79', type: 'Passive Income', blockchain: 'Ethereum'},
  {name: 'Ocean Money', slug: 'ocean-money', type: 'Banking Services, Crypto Services', blockchain: 'N/A', banner: 'https://www.ocean.money/_next/image?url=%2Fimages%2Fblog-1.png&w=1920&q=75'},
  {name: 'OMNIBirds', slug: 'omnibirds', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum', banner: 'https://i.seadn.io/gcs/files/e66305d2587c0ea7e29d7c1c1cd3cae5.png?auto=format&w=1920'},
  {name: 'Ace Miners NFT', slug: 'aceminers', type: 'NFT: Utility, Passive Income', blockchain: 'Ethereum', banner: 'https://i.seadn.io/gcs/files/f59537bf481f49ad3d97a8de0ac164d0.png?auto=format&w=1920'},
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
            {
              project.banner && 
                <div style={{
                  height: '120px',
                  backgroundImage: `url(${project.banner})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  borderRadius: '4px'
                }}>
                </div>
            }
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
