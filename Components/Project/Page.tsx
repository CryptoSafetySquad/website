import type { Project } from "../../types/project";
import FullPage from "../FullPage";
import Feed from "./Feed";
import { buildFeed } from "../../functions/Project/buildFeed";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import ModeSwitchingIcon from "../ModeSwitchingIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ProjectPageProps {
  project: Project;
  sidebar?: any;
}

const tokenColours = {
  btc: '#FF9500',
  usdc: '#2775CA',
  usdt: '#009393',
  eth: '#fff'
}

type tokenEntry = {
  blockchain: 'ethereum' | 'polygon' | 'bsc' | 'litecoin' | 'kadena',
  token: 'wbtc' | 'usdc' | 'usdt' | 'eth' | 'weth' | 'btc' | 'ltc' | 'kda',
  label: string;
  color: string;
  stack: 'Bluechip' | 'Altcoin'
}
let tokens: tokenEntry[] = [
  { blockchain: 'ethereum', token: 'wbtc', label: 'wBTC (Eth)', color: tokenColours.btc, stack: 'Bluechip' },
  { blockchain: 'ethereum', token: 'usdc', label: 'USDC (Eth)', color: tokenColours.usdc, stack: 'Bluechip' },
  { blockchain: 'ethereum', token: 'usdt', label: 'USDT (Eth)', color: tokenColours.usdt, stack: 'Bluechip' },
  { blockchain: 'polygon', token: 'weth', label: 'wETH (Poly)', color: tokenColours.eth, stack: 'Bluechip' },
  { blockchain: 'polygon', token: 'wbtc', label: 'wBTC (Poly)', color: tokenColours.btc, stack: 'Bluechip' },
  { blockchain: 'polygon', token: 'usdc', label: 'USDC (Poly)', color: tokenColours.usdc, stack: 'Bluechip' },
  { blockchain: 'litecoin', token: 'ltc', label: 'LTC', color: '', stack: 'Bluechip' },
  { blockchain: 'kadena', token: 'kda', label: 'KDA ', color: '', stack: 'Altcoin' },
  // { blockchain: 'ethereum', token: 'usdc', label: 'USDT (Eth)', color: '' },
  // { blockchain: 'ethereum', token: 'usdc', label: 'USDT (Eth)', color: '' },
]

const EarningsChart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
  const chartHeight = '175px'
  let chartDataset: any[] = []

  tokens.forEach(token => {
    if (data[token.blockchain] &&
      data[token.blockchain][token.token] &&
      Math.max(...data[token.blockchain][token.token]) > 0
    ) {
      chartDataset.push({
        label: token.label,
        data: data[token.blockchain][token.token],
        backgroundColor: token.color,
        // borderColor: '#fff',
        borderWidth: 0,
        // borderRadius: 0,
        stack: token.stack, // 'Stablecoin'
      })
    }
  })

  return (
    <div style={{ height: chartHeight }}>
      <Bar
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            }
          }
        }}
        data={{
          labels: labels,
          datasets: chartDataset
        }}
      />
    </div>
  )
}

const StatsContent = ({ project }: { project: Project }) => {
  if (!project.earnings) { return null }
  const dollarIcon = <ModeSwitchingIcon filename='dollar-sign' size={12} scheme='white' />

  // Compile earnings data
  const earningsData: any = {
    labels: [],
    ethereum: { wbtc: [], usdc: [] },
    polygon: { wbtc: [], usdc: [], weth: [] },
    bsc: { usdc: [], busd: [] },
    total: []
  }
  project.earnings.forEach((entry: any) => {
    let total = 0
    tokens.forEach(token => {
      if (
        entry[token.blockchain] &&
        earningsData[token.blockchain] && 
        earningsData[token.blockchain][token.token] &&
        entry[token.blockchain][token.token]
      ) {
        earningsData[token.blockchain][token.token].push(entry[token.blockchain][token.token] || 0);
        total += entry[token.blockchain][token.token]
      } else {
        if (!earningsData[token.blockchain]) {
          earningsData[token.blockchain] = {}
        }
        if (!earningsData[token.blockchain][token.token]) {
          earningsData[token.blockchain][token.token] = [0]
        } else {
          earningsData[token.blockchain][token.token].push(0);
        }
      }
    })
    earningsData.labels.push(entry.label);
    earningsData.total.push(total);
  })

  if (Math.max(...earningsData.total) === 0) {
    return null
  }

  return (
    <>
      {/* Earnings */}
      <div className='project-card'>
        <h2 className='card__header'>{dollarIcon} Earnings</h2>
        <EarningsChart
          labels={earningsData.labels}
          title={`Earnings`}
          data={earningsData}
        />
      </div>
    </>
  )
}

const Page = ({ project, sidebar }: ProjectPageProps) => {
  // const linkIcon = <img alt='Website Link' className='mr-2' src='/images/icons/external.svg' height='20' width='20' />
  // const openseaIcon = <img alt='OpenSea Link' className='mr-2' src='/images/icons/opensea.svg' height='22' width='22' />
  // const twitterIcon = <img alt='OpenSea Link' className='mr-2' src='/images/icons/twitter.svg' height='22' width='22' />

  return <FullPage {...{
    title: project.name,
    content: (
      <>
      <main>  
        <Feed className={project?.textClass} entries={buildFeed(project)} />
      </main>
      </>
    ),
    slug: `projects/${project.slug}`,
    description: 'Hydro Whales Mining Club',
    header: (<Header {...project} />),
    sidebarContent: (
      <>
        <Sidebar project={project}>
          {sidebar}
        </Sidebar>
        {project.earnings && <StatsContent project={project} />}
      </>
    )
  }} />
}

export default Page
