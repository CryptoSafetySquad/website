import type { EarningsEntry } from "../../../types/EarningsEntry"

const earnings: EarningsEntry[] = [
  { label: '1 Feb 23', date: '2023-02-01', ethereum: { usdc: 10, wbtc: 10 }, amount: 20.00, notes: '$10 USDC, 0.000435 wBTC' },
  { label: '1 Mar 23', date: '2023-03-01', ethereum: { usdc: 13, wbtc: 10 }, amount: 23.00, notes: '$13 USDC, 0.000424 wBTC' },
]

export default earnings
