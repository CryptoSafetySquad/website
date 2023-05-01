import type { NextPage } from 'next'

import { OceanMoney as Project } from '../../data/projects/oceanmoney/oceanmoney'
import { default as ProjectPage } from '../../Components/Project/Page'

const OceanMoney: NextPage = () => {
  return <ProjectPage project={Project} />
}

export default OceanMoney
