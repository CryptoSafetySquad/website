import type { NextPage } from 'next'

import { YieldRobot as Project } from '../../data/projects/yieldrobot/yieldrobot'
import { default as ProjectPage } from '../../Components/Project/Page'

const YieldRobot: NextPage = () => {
  return <ProjectPage project={Project} />
}

export default YieldRobot
