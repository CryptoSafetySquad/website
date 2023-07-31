import type { EarningsEntry } from "../../../types/EarningsEntry";

const earnings: EarningsEntry[] = [
  { label: 'Oct 22', date: '2022-10-20', amount: 15.5, polygon: { weth: 0.012 } }, /// https://polygonscan.com/tx/0xb2124acb1e32aaeb4d755e52d5895cb632299c8fc3e07447ecefbc1375e3b3c5
  { label: 'Jun 23', date: '2023-06-29', litecoin: { ltc: 0.144 }, kadena: { kda: 1.6 }, nervos: { ckb: 425 } },
  { label: 'Jul 23', date: '2023-07-31', litecoin: { ltc: 0.0538 }, kadena: { kda: 1.4 }, nervos: { ckb: 290 } },
]

export default earnings
