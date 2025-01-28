import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../Components/Navbar'

import formatPercent from '../functions/formatPercent'

type HistoricalPriceData = {
  date: string;
  btc?: number;
  xrp?: number;
  eth?: number;
  sol?: number;
  link?: number;
  ada?: number;
}

const TRACKED_TOKENS: number = 6

const dataAverage = (data: HistoricalPriceData): number => {
  if (!data) { return 0 }
  let sum = 0
  sum += data.btc || 0
  sum += data.xrp || 0
  sum += data.eth || 0
  sum += data.sol || 0
  sum += data.link || 0
  sum += data.ada || 0
  return (sum / TRACKED_TOKENS)
}

const formatCurrency = (value: number): string => {
  if (!value) return ''
  return parseFloat(value.toFixed(2)).toLocaleString("en-US")
}

const btcEthAverage = (data: HistoricalPriceData): number => {
  return ((data.btc || 0) + (data.eth || 0)) / 2
}

// 1 jan 4 apr 7 jul 10 oct

const priceData: HistoricalPriceData[] = [
  { date: '1 Jan 2020', btc: 7194.89, eth: 129.63, xrp: 0.1929, sol: 0, link: 1.77, ada: 0.032832 },
  { date: '1 Jan 2021', btc: 28994.01, eth: 737.71, xrp: 0.2198, sol: 1.51, link: 11.27, ada: 0.181382 },
  { date: '1 Jan 2022', btc: 46311.75, eth: 3683.05, xrp: 0.8313, sol: 170.31, link: 19.59, ada: 1.310130 },
  { date: '1 Jan 2023', btc: 16547.91, eth: 1196.71, xrp: 0.3399, sol: 9.96, link: 5.57, ada: 0.246414 },
  { date: '1 Jan 2024', btc: 42280.23, eth: 2282.87, xrp: 0.6157, sol: 101.51, link: 15.56, ada: 0.594187 },
  { date: '1 Apr 2024', btc: 71333.48, eth: 3647.82, xrp: 0.6292, sol: 202.87, link: 19.14, ada: 0.650427 },
  { date: '1 Jul 2024', btc: 62673.61, eth: 3432.61, xrp: 0.4755, sol: 146.48, link: 14.26, ada: 0.392135 },
  { date: '1 Oct 2024', btc: 63335.61, eth: 2603.26, xrp: 0.6115, sol: 152.62, link: 11.85, ada: 0.373214 },
  { date: '1 Jan 2025', btc: 93425.10, eth: 3332.41, xrp: 2.0801, sol: 189.27, link: 20.00, ada: 0.843766 }
]

const Prices: NextPage = () => {
  return (
    <div className='home h-full' style={{
      minHeight: '100vh',
      backgroundImage: 'var(--bg-image)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Head>
        <title>Crypto Safety Squad | Prices</title>
        <meta name="description" content="A community project dedicated to onboarding new users safely into CryptoCurrencies." />
      </Head>

      <Navbar />

      <main className='h-full py-16 px-8'>
        <h1 className='text-4xl text-center mb-4'>
          Prices
        </h1>

        <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>#1 BTC</th>
              <th>#2 ETH</th>
              <th>#3 XRP</th>
              <th>#5 SOL</th>
              <th>#9 ADA</th>
              <th>Average</th>
              <th>BTC/ETH Avg</th>
              <th>Avg +/- % Previous</th>
              <th>BTC +/- % Previous</th>
              <th>ETH +/- % Previous</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((data: HistoricalPriceData, index) => {
              const prevData = priceData[index - 1]
              return <tr key={index}>
                <td>{data.date}</td>
                <td>{formatCurrency(data.btc || 0)}</td>
                <td>{formatCurrency(data.eth || 0)}</td>
                <td>{formatCurrency(data.xrp || 0)}</td>
                <td>{formatCurrency(data.sol || 0)}</td>
                <td>{formatCurrency(data.ada || 0)}</td>
                <td>{dataAverage(data).toLocaleString("en-US")}</td>
                <td>{btcEthAverage(data).toLocaleString("en-US")}</td>
                <td>{formatPercent(dataAverage(data) / dataAverage(priceData[index - 1]))}</td>
                <td>{formatPercent((data.btc || 0) / ( prevData?.btc || 0))}</td>
                <td>{formatPercent((data.eth || 0) / ( prevData?.eth || 0))}</td>
              </tr>
            })}
          </tbody>
        </table>
        
      </main>
    </div>
  )
}

export default Prices
