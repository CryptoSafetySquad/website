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

const btcEthAverage = (data: HistoricalPriceData): number => {
  return ((data.btc || 0) + (data.eth || 0)) / 2
}

// 1 jan 4 apr 7 jul 10 oct

const priceData: HistoricalPriceData[] = [
  { date: '1 Jul 2024', btc: 63777.23, eth: 3513.31, xrp: 0.4828, sol: 148.80, link: 14.54, ada: 0.407562 },
  { date: '1 Oct 2024', btc: 63335.61, eth: 2657.62, xrp: 0.6336, sol: 157.26, link: 12.24, ada: 0.385675 },
  { date: '1 Jan 2025', btc: 94929.87, eth: 3366.53, xrp: 2.3468, sol: 194.82, link: 21.77, ada: 0.929422 }
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
              <th>BTC</th>
              <th>ETH</th>
              <th>XRP</th>
              <th>SOL</th>
              <th>ADA</th>
              <th>Average</th>
              <th>BTC/ETH Avg</th>
              <th>+/- % Previous</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((data: HistoricalPriceData, index) => {
              return <tr>
                <td>{data.date}</td>
                <td>{data.btc?.toLocaleString("en-US")}</td>
                <td>{data.eth?.toLocaleString("en-US")}</td>
                <td>{data.xrp?.toLocaleString("en-US")}</td>
                <td>{data.sol?.toLocaleString("en-US")}</td>
                <td>{data.ada?.toLocaleString("en-US")}</td>
                <td>{dataAverage(data).toLocaleString("en-US")}</td>
                <td>{btcEthAverage(data).toLocaleString("en-US")}</td>
                <td>{(formatPercent(dataAverage(data) / dataAverage(priceData[index - 1])))}</td>
              </tr>
            })}
          </tbody>
        </table>
        
      </main>
    </div>
  )
}

export default Prices
