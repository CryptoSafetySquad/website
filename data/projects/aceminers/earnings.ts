import type { EarningsEntry } from "../../../types/EarningsEntry";

const earnings: EarningsEntry[] = [
  { label: 'Oct 22', date: '2022-10-20', amount: 15.5, polygon: { weth: 0.012 } }, /// https://polygonscan.com/tx/0xb2124acb1e32aaeb4d755e52d5895cb632299c8fc3e07447ecefbc1375e3b3c5
  { label: 'Jul 23', date: '2023-07-01', litecoin: { ltc: 0.144 }, kadena: { kda: 1.6 }, nervos: { ckb: 425 } },
  { label: 'Aug 23', date: '2023-08-01', litecoin: { ltc: 0.0538 }, kadena: { kda: 1.4 }, nervos: { ckb: 290 } },
  { label: 'Sep 23', date: '2023-09-01', litecoin: { ltc: 0.0410 }, kadena: { kda: 1 }, nervos: { ckb: 300 } },
  { label: 'Oct 23', date: '2023-10-01', litecoin: { ltc: 0.0360 }, kadena: { kda: 1.1 }, nervos: { ckb: 190 } },
  { label: 'Jan 24', date: '2024-01-05', litecoin: { ltc: 0.021 }, kadena: { kda: 6.2 }, nervos: { ckb: 340 } },
  // 90 Day Compounding
]

export default earnings
