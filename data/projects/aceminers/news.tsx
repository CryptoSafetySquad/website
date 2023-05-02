import ExternalLink from "../../../Components/ExternalLink"
import type { NewsEntry } from "../../../types/NewsEntry"

const news: NewsEntry[] = [
  { date: '26/04/2023', dateISO: '2023-04-26', type: 'news', content: (<>Snapshot votes for how much of rewards to allocate for compounding: <ExternalLink href='https://snapshot.org/#/aceminers.eth/proposal/0x0c94ca6a53c18c2dc1133a19052acd84bd82862de036f4b2b3127bd79a8bf0b7' text='P1 holders' />, <ExternalLink text='P2 Holders' href='https://snapshot.org/#/aceminersp2.eth/proposal/0xdee2d0233ff286a87849032ae48736c1d910d7ede5034bed8956aec4d6e064e2' /></>) },
  { date: '15/03/2023', dateISO: '2023-03-15', type: 'news', content: (<>P2 Final NFTs minted: <a href='https://etherscan.io/tx/0x766a8f8dbc79bfad0a04880e85c0d8720154e2045a1c6833cc32b0b756deb74f' target='_blank' rel='noopener noreferrer'>Etherscan</a></>) },
  { date: '13/11/2022', dateISO: '2022-11-13', type: 'news', content: 'Community vote: Compounding will happen for 6 months to increase revenue generated by NFTs, The 6 months compounding will officially commence on Monday, November 14th and will last until May 14th, 2023, We will proceed to mine for a full month from May 14th, 2023 - June 14th, 2023 with all of the accumulated miners. The total mined rewards for June will be claimable via our Ace Dashboard and payouts will be on a monthly basis instead of quarterly.' },
  { date: '20/10/2022', dateISO: '2022-10-20', type: 'news', content: (<>1st payout to P1 holders (<span className='blockchain polygon'>Polygon</span>) ~$16</>) }
]

export default news
