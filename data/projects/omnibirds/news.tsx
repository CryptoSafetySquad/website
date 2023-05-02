import type { NewsEntry } from "../../../types/NewsEntry"

const news: NewsEntry[] = [
  { date: '07/12/2022', type: 'news', dateISO: '2022-12-07', content: 'Bird holder announcement, NFTs will no longer be paying out rewards.' },
  { date: '28/10/2022', type: 'news', dateISO: '2022-10-28', content: (<>NFT holders receive another payout in <span className='text-usdc'>USDC</span> on <span className='blockchain ethereum'>Ethereum</span> blockchain.</>) },
  { date: '27/09/2022', type: 'news', dateISO: '2022-09-27', content: (<>NFT holders receive first payout in <span className='text-usdc'>USDC</span> on <span className='blockchain ethereum'>Ethereum</span> blockchain.</>) }
]

export default news
