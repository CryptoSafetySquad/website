import type { NextPage } from 'next'

import { default as ProjectPage } from '../../Components/Project/Page'
import { default as Project } from '../../data/projects/omnibirds/omnibirds'

const OMNIBirds: NextPage = () => {
  return <ProjectPage project={Project} />
}

export default OMNIBirds
