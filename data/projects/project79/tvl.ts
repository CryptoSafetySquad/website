interface tvlEntry {
  label: string;
  date: string;
  tvl: number;
}

const tvl: tvlEntry[] = [
  { label: 'Sep 22', date: '2022-09-06', tvl: 2400000 },
  { label: 'Oct 22', date: '2022-10-06', tvl: 4800000 },
  { label: 'Nov 22', date: '2022-11-04', tvl: 7108109 },
  { label: 'Dec 22', date: '2022-12-05', tvl: 8611727 },
  { label: 'Jan 23', date: '2023-01-11', tvl: 12601022 }
]

export default tvl
