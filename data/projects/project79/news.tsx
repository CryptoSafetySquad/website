import ExternalLink from "../../../Components/ExternalLink"
import type { NewsEntry } from "../../../types/NewsEntry"

const news: NewsEntry[] = [
  { type: 'news', date: '10/05/2023', dateISO: '2023-05-10', content: (<>Sahara STAR presale is now live <ExternalLink href='https://sahara-presale.project79.com/' text="https://sahara-presale.project79.com/" /></>) },
  { type: 'news', date: '26/02/2023', dateISO: '2023-02-26', content: (<>Feb 2023 Earnings: <span className="healthy">5.9%</span></>) },
  { type: 'news', date: '12/02/2023', dateISO: '2023-02-12', content: 'Burlcore token prices: public price: $250, presale $225 (10% discount), transition: $200 (20% discount)' },
  { type: 'news', date: '28/01/2023', dateISO: '2023-01-28', content: (<>Jan 2023 Earnings: <span className="healthy">6.4%</span></>) },
  { type: 'news', date: '28/01/2023', dateISO: '2023-01-28', content: (<>P79 Token <span className="healthy">presale</span> now open - <a href='https://presale.project79.com/' rel='noopener noreferrer' target='_blank'>p79 presale</a></>) },
  { type: 'news', date: '28/01/2023', dateISO: '2023-01-28', content: (<>Twitter spaces AMA with Phil (Gold Partner) - <a href='https://twitter.com/i/spaces/1PlKQpkWaAzxE' rel='noopener noreferrer' target='_blank'>twitter space</a></>) },
  { type: 'news', date: '26/01/2023', dateISO: '2023-01-26', content: (<>Clarification: If transition from <span className='warn'>sacrifice</span> to new model no earnings will be earned for February, first payout from tokens will be starting March</>) },
  { type: 'news', date: '29/12/2022', dateISO: '2022-12-29', content: (<>P79 evolves, twitter space, overview and faq - <a href='https://twitter.com/i/spaces/1DXxyvZXgDLKM' rel='noopener noreferrer' target='_blank'>twitter space</a> - <a href='https://assets.website-files.com/62f2215d13f471bdeeb9ff6e/63accb82ce1c7d69edfb7ac1_Project%2079-Evolution.pdf' rel='noopener noreferrer' target='_blank'>new litepaper</a>, 2 tokens 1 for p79 ownership, 1 for gold-pegged token.</>) },
  { type: 'news', date: '28/12/2022', dateISO: '2022-12-28', content: (<>Dec 2022 Earnings: <span className="healthy">6.7%</span></>) },
  { type: 'news', date: '24/12/2022', dateISO: '2022-12-24', content: (<>The <span className='warn'>sacrifice</span> will open on 29 December 2022 12:00 ❄️ The <span className='warn'>sacrifice</span> will close on 6 January 2023 12:00 ☃️</>) },
  { type: 'news', date: '25/11/2022', dateISO: '2022-11-25', content: (<>Next <span className='warn'>sacrifice</span> period will also support BSC</>) },
  { type: 'news', date: '25/11/2022', dateISO: '2022-11-25', content: (<>3rd <span className='warn'>sacrifice</span> earnings: <span className='healthy'>6.5%</span></>) },
  { type: 'news', date: '04/11/2022', dateISO: '2022-11-04', content: (<>3rd <span className='warn'>sacrifice</span> period closed, TVL $7.1m</>) },
  { type: 'news', date: '29/10/2022', dateISO: '2022-10-29', content: (<>James Pelton AMA - <a href='https://www.youtube.com/watch?v=zpd8L2rlLgg' rel='noopener noreferrer' target='_blank'>AMA with Project 79: Making 6%/month With Actual Revenue</a></>) },
  { type: 'news', date: '24/10/2022', dateISO: '2022-10-24', content: (<>2nd <span className='warn'>sacrifice</span> earnings of <span className='healthy'>6.4%</span></>) },
  { type: 'news', date: '26/09/2022', dateISO: '2022-09-26', content: (<>1st <span className='warn'>sacrifice</span> earnings of <span className='healthy'>6.8%</span>, plus new <a href='https://sacrifice.project79.com/' rel='noreferrer noopener' target='_blank'>sacrifice dashboard</a> launched</>) },
  { type: 'news', date: '13/09/2022', dateISO: '2022-09-13', content: 'P79 discord launched' },
  { type: 'news', date: '02/08/2022', dateISO: '2022-08-02', content: 'Project 79 announced!' },
]

export default news
