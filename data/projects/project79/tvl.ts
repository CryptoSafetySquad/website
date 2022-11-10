interface tvlEntry {
  label: string;
  date: string;
  tvl: number;
}

const tvl: tvlEntry[] = [
  { label: 'Sep 22', date: '2022-09-06', tvl: 2400000 },
  { label: 'Oct 22', date: '2022-10-06', tvl: 4800000 },
  { label: 'Nov 22', date: '2022-11-04', tvl: 7108109 }
]

export default tvl
