import type { NextPage } from 'next'

import { HydroWhalesMiningClub } from '../../data/projects/hydrowhales/hydrowhales'

import { default as ProjectPage } from '../../Components/Project/Page';

// const HWChart = ({ labels, data, title}: { labels: any[], data: any, title: string; }) => {
//   const chartHeight = '175px'
//   return (
//     <div style={{ height: chartHeight }}>
//       <Bar
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               stacked: true,
//             },
//             y: {
//               stacked: true,
//             }
//           }
//         }}
//         data={{
//           labels: labels,
//           datasets: [
//             // {
//             //   label: 'Total ($)',
//             //   data: data.total,
//             //   backgroundColor: 'rgba(100, 100, 255, 0.4)'
//             // },
//             {
//               label: 'wBTC (Eth) ($)',
//               data: data.ethereum.wbtc,
//               backgroundColor: '#FF9500',
//               // borderColor: '#fff',
//               borderWidth: 0,
//               // borderRadius: 0,
//               stack: 'Primary', // 'Bluechip'
//             },
//             {
//               label: 'USDC (Eth)',
//               data: data.ethereum.usdc,
//               backgroundColor: '#2775CA',
//               // borderColor: '#fff',
//               borderWidth: 0,
//               // borderRadius: 0,
//               stack: 'Primary', // 'Stablecoin'
//             },
//             {
//               label: 'wBTC (Poly) ($)',
//               data: data.polygon.wbtc,
//               borderColor: '#2f1a52', // Polygon Purple
//               borderWidth: 2,
//               borderRadius: 0,
//               backgroundColor: '#FF9500',
//               stack: 'Primary', // 'Bluechip'
//             },
//             {
//               label: 'USDC (Poly)',
//               data: data.polygon.usdc,
//               borderColor: '#2f1a52', // Polygon Purple
//               borderWidth: 2,
//               borderRadius: 0,
//               backgroundColor: '#2775CA',
//               stack: 'Primary', // 'Stablecoin'
//             }
//           ],
//         }}
//       />
//     </div>
//   )
// }

// const StatsContent = ({ project }: { project: Project }) => {
//   if (!project.earnings) { return null }

//   // Compile earnings data
//   const earningsData: { labels: string[]; ethereum: { wbtc: number[]; usdc: number[]; }; polygon: { wbtc: number[]; usdc: number[]; }; total: number[]; } = {
//     labels: [], ethereum: { wbtc: [], usdc: [] }, polygon: { wbtc: [], usdc: [] }, total: []
//   }
//   project.earnings.forEach((entry: EarningsEntry) => {
//     earningsData.labels.push(entry.label);
//     earningsData.ethereum.usdc.push(entry.ethereum?.usdc || 0);
//     earningsData.ethereum.wbtc.push(entry.ethereum?.wbtc || 0);
//     earningsData.polygon.usdc.push(entry.polygon?.usdc || 0);
//     earningsData.polygon.wbtc.push(entry.polygon?.wbtc || 0);
//     earningsData.total.push((entry.ethereum?.wbtc || 0) + (entry.ethereum?.usdc || 0));
//   })

//   return (
//     <>
//       {/* Earnings */}
//       <div className='project-card'>
//         <h2 className='card__header'>Earnings</h2>
//         <HWChart
//           labels={earningsData.labels}
//           title='Earnings'
//           data={earningsData}
//         />
//       </div>
//     </>
//   )
// }

const HydroWhales: NextPage = () => {
  return <ProjectPage project={HydroWhalesMiningClub} />
}

export default HydroWhales
