import type { NextPage } from 'next'

import { default as ProjectPage } from '../../Components/Project/Page'
import { YieldNodes as Project } from '../../data/projects/yieldnodes/yieldnodes'

const YieldNodes: NextPage = () => {
  return <ProjectPage project={Project} />
}

export default YieldNodes
