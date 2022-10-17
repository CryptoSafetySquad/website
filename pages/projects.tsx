import type { NextPage } from 'next'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales', type: 'Utility, NFT, Passive Income'},
  {name: 'Project 79', slug: 'project79', type: 'Utility, Passive Income'},
  {name: 'OMNIBirds', slug: 'omnibirds', type: 'Utility, Passive Income'},
]

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
    <table className='table'>
      <thead>
        <tr>
          <th>Project</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        projects.map(project => 
          <tr key={project.slug}>
            <td><a href={`/projects/${project.slug}`}>{project.name}</a></td>
            <td>{project.type}</td>
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
