import type { NextPage } from 'next'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales', type: 'Utility, NFT, Passive Income', blockchain: 'Ethereum'},
  {name: 'Project 79', slug: 'project79', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'Ocean Money', slug: 'ocean-money', type: 'Banking Services, Crypto Services', blockchain: 'N/A'},
  {name: 'OMNIBirds', slug: 'omnibirds', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'Ace Miners NFT', slug: 'aceminers', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
]

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
    <>
      <p>The projects here are just those we have done some research into, the content herein does not constitute financial advice</p>
      <p>Please do your own research before investing, we can take no responsibility for the performance of any investments you make.</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Project</th>
            <th>Type</th>
            <th>Blockchain</th>
          </tr>
        </thead>
        <tbody>
        {
          projects.map(project => 
            <tr key={project.slug}>
              <td><a href={`/projects/${project.slug}`}>{project.name}</a></td>
              <td>{project.type}</td>
              <td>{project.blockchain}</td>
            </tr>
          )
        }
        </tbody>
      </table>
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
