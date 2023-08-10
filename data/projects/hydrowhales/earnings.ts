import type { EarningsEntry } from "../../../types/EarningsEntry"

const earnings: EarningsEntry[] = [
  { label: '1 Feb 23', date: '2023-02-01', ethereum: { usdc: 10, wbtc: 10 }, amount: 20.00, notes: '$10 USDC, 0.000435 wBTC' },
  { label: '1 Mar 23', date: '2023-03-01', ethereum: { usdc: 13, wbtc: 10 }, amount: 23.00, notes: '$13 USDC, 0.000424 wBTC' },
  { label: '1 Apr 23', date: '2023-04-01', polygon: { usdc: 0.01, wbtc: 10 }, amount: 23.00, notes: '$0.01 USDC, 0.000346 wBTC' },
  { label: '1 May 23', date: '2023-05-01', polygon: { usdc: 5, wbtc: 5 }, amount: 10, notes: '$5 USDC, 0.000179 wBTC' },
  { label: '1 Jun 23', date: '2023-06-01', polygon: { usdc: 5, wbtc: 10 }, amount: 15, notes: '$5 USDC, 0.000373 wBTC' },
  { label: '1 Jul 23', date: '2023-07-01', ethereum: {} },
  { label: '1 Aug 23', date: '2023-07-01', polygon: { wbtc: 10 } },
]

export default earnings
