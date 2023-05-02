import ExternalLink from "../../../Components/ExternalLink"
import type { NewsEntry } from "../../../types/NewsEntry"

const news: NewsEntry[] = [
  { date: '09/01/2023', type: 'news', dateISO: '2023-01-09', content: (<>EMP NFTs now listed on <ExternalLink href='https://www.alphashares.io/' text='Alpha Shares' /></>) },
  { date: '04/01/2023', type: 'news', dateISO: '2023-01-04', content: (<><ExternalLink href='https://defender.emp.money/' text='Detonator Defenders' /> now live: <ExternalLink href='https://nftrade.com/collection/detonator-defenders'><img className='w-auto-important' alt='NFTrade' width={20} src='/images/logos/nftrade.webp' /></ExternalLink></>) },
]

export default news
