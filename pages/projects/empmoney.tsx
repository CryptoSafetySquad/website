import type { NextPage } from 'next'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Header from '../../Components/Project/Header'
import Sidebar from '../../Components/Project/Sidebar';

import news from '../../data/projects/emp/news'
import EMPMoney from '../../data/projects/emp/emp';
import FullPage from '../../Components/FullPage';
import Feed from '../../Components/Project/Feed';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function average(nums: number[]): number {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

const EmpMoney: NextPage = () => {
  const title = 'EMP'

  const content = (
    <>
      <Feed entries={news} />
    </>
  )

  return (
    <FullPage {...{
      title,
      content,
      slug: 'projects/empmoney',
      description: 'EMP',
      header: <Header
        description={(<>A seigniorage protocol on BSC pegged to ethereum 4000:1</>)}
        name={title}
        website='https://emp.money'
        // twitter=''
      />,
      sidebarContent: (
        <>
          <Sidebar project={EMPMoney} />
        </>
      )
    }} />
  )
}

export default EmpMoney
