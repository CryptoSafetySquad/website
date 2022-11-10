import type { NextPage } from 'next'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales', type: 'Utility, NFT, Passive Income', blockchain: 'Ethereum'},
  {name: 'Project 79', slug: 'project79', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'OMNIBirds', slug: 'omnibirds', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
  {name: 'Ace Miners NFT', slug: 'aceminers', type: 'Utility, Passive Income', blockchain: 'Ethereum'},
]

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
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
