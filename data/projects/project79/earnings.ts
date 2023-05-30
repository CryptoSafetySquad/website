interface p79EarningsEntry {
  label: string;
  date: string;
  percent: number;
}

const sacrificeEarnings: p79EarningsEntry[] = [
  // Sacrifice Model                                     // Rolling Total
  { label: 'Sep 22', date: '2022-09-26', percent: 6.8 }, // 6.8%
  { label: 'Oct 22', date: '2022-10-24', percent: 6.4 }, // 13.2%
  { label: 'Nov 22', date: '2022-11-26', percent: 6.5 }, // 19.7%
  { label: 'Dec 22', date: '2022-12-28', percent: 6.7 }, // 26.4%
  { label: 'Jan 23', date: '2022-01-28', percent: 6.4 }, // 32.8%
  { label: 'Feb 23', date: '2023-02-26', percent: 5.9 }, // 38.7%
  { label: 'Mar 23', date: '2023-03-30', percent: 6.3 }, // 45%
  { label: 'Apr 23', date: '2023-04-30', percent: 5.5 }, // 50.5%
  { label: 'May 23', date: '2023-05-30', percent: 5.2 }, // 55.7%
]

export default sacrificeEarnings
