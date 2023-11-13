import type { EarningsEntry } from "../../../../types/EarningsEntry"

const earnings: EarningsEntry[] = [
  // Presale (P79 transition): 225, 250, current: 300
  { label: '1 May 23', date: '2023-05-01', ethereum: { usdc: 3.01 }, amount: 3.01 }, // YLD $225 - 1.33% - $300  1%
  { label: '2 Jun 23', date: '2023-06-02', ethereum: { usdc: 4.55 }, amount: 4.55 }, // YLD $225 - 2.01% - $300  1.51%
  { label: '4 Jul 23', date: '2023-07-04', ethereum: { usdc: 4.85 }, amount: 4.85 }, // YLD $225 - 2.15% - $300  1.61%
  { label: '2 Aug 23', date: '2023-08-02', ethereum: { usdc: 3.45 }, amount: 3.45 },
  { label: '4 Sep 23', date: '2023-09-04', ethereum: { usdc: 3.34 }, amount: 3.34 },
  { label: '7 Oct 23', date: '2023-10-07', ethereum: { usdc: 2.55 }, amount: 2.55 }, // YLD ($225): 1.13% - ($300): 0.85%
  // 6 Month Average - Total Earnings: 21.75, Total Return 9.66% (@$225/Token) 7.25% (@$300/Token)
  //                 - Average Earning: 3.625     @225 = 1.61%     @300 = 1.20%
  { label: '14 Nov 23', date: '2023-11-14', ethereum: { usdc: 1.55 }, amount: 1.55 }, // YLD ($225): 0.68% - ($300): 0.51%
]

export default earnings
