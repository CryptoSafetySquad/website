import ExternalLink from "../../../Components/ExternalLink"
import type { NewsEntry } from "../../../types/NewsEntry"

const news: NewsEntry[] = [
  { type: 'news', date: '31/03/2023', dateISO: '2023-03-31', content: (<>March earnings (<span className="blockchain ethereum">Ethereum</span>): <span className='reward wbtc'>$10 wBTC</span></>) },
  { type: 'news', date: '20/03/2023', dateISO: '2023-03-20', content: (<>AceMiners NFT purchase <ExternalLink href='https://snapshot.org/#/hydrowhales.eth/proposal/0x9b704b8622eedbbc2c7287e6ce5da0548307330279416ba30efea2c86fe36702'>proposal</ExternalLink> passed ✔️</>) },
  { type: 'news', date: '13/03/2023', dateISO: '2023-03-13', content: (<>Proposal: transition rewards to <span className='blockchain polygon'>Polygon</span> <a href='https://snapshot.org/#/hydrowhales.eth/proposal/0x125242229981e4b694aff075a13434c8e37b59d726a89bd434affbebf274be4c' target='_blank'>Snapshot</a> ✔️</>) },
  { type: 'news', date: '27/02/2023', dateISO: '2023-02-27', content: (<>Feb earnings (<span className="blockchain ethereum">Ethereum</span>): <span className='reward usdc'>$13 USDC</span>, <span className='reward wbtc'>0.000424 wBTC</span></>) },
  { type: 'news', date: '01/02/2023', dateISO: '2023-02-01', content: (<>1st claimable earnings (<span className="blockchain ethereum">Ethereum</span>): <span className='reward usdc'>$10 USDC</span>, <span className='reward wbtc'>0.000435 wBTC</span></>) },
  { type: 'news', date: '07/01/2023', dateISO: '2023-01-07', content: (<>P79 adds <span className='reward usd'>$93,000</span> to Hydro Whales treasury from Dec 22-Jan 23 period.</>) },
  { type: 'news', date: '07/01/2023', dateISO: '2023-01-07', content: 'Accouncements: NFT Vault and Escrow platform:  beta begin end of Jan for whales, public live mid feb.' },
  { type: 'news', date: '01/12/2022', dateISO: '2022-12-01', content: '1st Feb first payout date confirmed by Sam' },
  { type: 'news', date: '09/10/2022', dateISO: '2022-10-09', content: '1000 ETH OpenSea Traded Volume' },
  { type: 'news', date: '02/10/2022', dateISO: '2022-10-02', content: 'Ocean Money announced!' },
  { type: 'news', date: '16/08/2022', dateISO: '2022-08-16', content: '305 S19 Pro miners live, hashrate over 34 Ph/s' },
  { type: 'news', date: '02/08/2022', dateISO: '2022-08-02', content: 'Project 79 announced!' },
  { type: 'news', date: '21/07/2022', dateISO: '2022-07-21', content: 'Final mint completed' }, // Last mint (NFT 9999) - Jul-21-2022 12:15:37 PM +UTC  https://etherscan.io/tx/0xf08cd460dde09e7d9aec2879bb3ec80288e0763eb54bad19e9cd87bcef8a2d71
  { type: 'news', date: '12/03/2022', dateISO: '2022-03-12', content: 'First NFT minted' }, // First mint (NFT 1) - Mar-12-2022 05:50:42 PM +UTC https://etherscan.io/tx/0xfeafbfcb9aab252ff8ddd21873f03572592989d8ce9adcd003e1a9fc9c4a7d81
]

export default news
