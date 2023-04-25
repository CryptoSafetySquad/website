import type { NextPage } from 'next'

import EMPMoney from '../../data/projects/emp/emp';
import { default as ProjectPage } from '../../Components/Project/Page';

const EmpMoney: NextPage = () => {
  return <ProjectPage project={EMPMoney} />
}

export default EmpMoney
