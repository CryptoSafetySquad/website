import type { NextPage } from 'next'

import { default as ProjectPage } from '../../Components/Project/Page'
import { default as Project } from '../../data/projects/drip/drip'

const Drip: NextPage = () => {
  return <ProjectPage project={Project} />
}

export default Drip
