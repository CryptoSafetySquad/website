import type { NextPage } from 'next'
import { Line } from 'react-chartjs-2';
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

import Page from '../../Components/Page'
import Header from '../../Components/Project/Header'
import ModeSwitchingIcon from '../../Components/ModeSwitchingIcon';
import Sidebar from '../../Components/Project/Sidebar';
import NewsListing from '../../Components/NewsListing';

import news from '../../data/projects/emp/news'
import { EMPMoney as Project } from '../../data/projects';

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
  const newsIcon = <ModeSwitchingIcon filename='newspaper' size={20} scheme='gold' />

  const content = (
    <>
      <div className='grid gap-2 md:grid-cols-[3fr_1fr]'>
        <div className='card'>
          <h2 className='dark:text-gold flex mb-2'>{newsIcon} News</h2>
          <NewsListing newsEntries={news} />
        </div>
        <Sidebar project={Project}>
        </Sidebar>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'projects/empmoney',
      description: 'EMP',
      header: <Header
        name={title}
        website='https://emp.money'
        // twitter=''
      />
    }} />
  )
}

export default EmpMoney
