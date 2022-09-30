import type { NextPage } from 'next'
import Page from '../Components/Page'

const projects = [
  {name: 'Hydro Whales Mining Club', slug: 'hydro-whales'},
  {name: 'OMNIBirds', slug: 'omnibirds'},
]

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
    <div className='grid grid-cols-2 gap-4'>
      {
        projects.map(project => 
          <div className='card p-2' key={project.slug}>
            <a className='text-lg' href={`/projects/${project.slug}`}>{project.name}</a>
          </div>
        )
      }
    </div>
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
