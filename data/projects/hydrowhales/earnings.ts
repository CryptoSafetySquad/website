import type { EarningsEntry } from "../../../types/EarningsEntry"

const earnings: EarningsEntry[] = [
  // #1
  { label: '1 Feb 23', date: '2023-02-01', ethereum: { usdc: 10, wbtc: 10 }, amount: 20.00, notes: '$10 USDC, 0.000435 wBTC' },
  // #2
  { label: '1 Mar 23', date: '2023-03-01', ethereum: { usdc: 13, wbtc: 10 }, amount: 23.00, notes: '$13 USDC, 0.000424 wBTC' },
  // #3
  { label: '1 Apr 23', date: '2023-04-01', polygon: { usdc: 0.01, wbtc: 10 }, amount: 23.00, notes: '$0.01 USDC, 0.000346 wBTC' },
  // #4
  { label: '1 May 23', date: '2023-05-01', polygon: { usdc: 5, wbtc: 5 }, amount: 10, notes: '$5 USDC, 0.000179 wBTC' },
  // #5
  { label: '1 Jun 23', date: '2023-06-01', polygon: { usdc: 5, wbtc: 10 }, amount: 15, notes: '$5 USDC, 0.000373 wBTC' },
  // #6: $30/WAVE (not yet launched) TODO
  { label: '1 Jul 23', date: '2023-07-01', ethereum: {} },
  // #7 $10/wBTC, $20/ORCA (not yet launched) TODO
  { label: '1 Aug 23', date: '2023-08-01', polygon: { wbtc: 10 }, amount: 30 },
  // #8 $8/wBTC $20/ORCA (not yet launched) TODO
  { label: '1 Sep 23', date: '2023-09-01', polygon: { wbtc: 8 }, amount: 28 },
  // #9 $5/wBTC $20/ORCA (not yet launched) TODO
  { label: '1 Oct 23', date: '2023-10-01', polygon: { wbtc: 5 }, amount: 25 },
  // #10 (dashboard #9) $5/wBTC $20/ORCA (not yet launched) TODO
  { label: '1 Nov 23', date: '2023-11-01', polygon: { wbtc: 5 }, amount: 25 },
]

export default earnings
