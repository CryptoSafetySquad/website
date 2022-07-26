import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'
import ExternalLink from '../../Components/ExternalLink'

const tick = '✅'
const warn = '⚠️'
const Disclaimer = () => <p className='warn'>Disclaimer: This is just a high level of my own basic research, it is not financial advice, you should conduct your own research before investing into any project. I accept no responsibility for your own investing decisions or any outcomes from investing in any project.</p>

const doxxed = () => {
  return (
    <>
      Core team fully <abbr title='Doxxed means personal data is available about team members, photo, work history, social media profiles etc.'>doxxed</abbr>: <ExternalLink href='https://www.omnimoney.io/about-us' />
    </>
  )
}

export const goodPoints = [
  { key: 'doxxed', content: doxxed() },
  { key:'whitepaper', content: 'Full whitepaper' },
  // { key:'wayback', content: (<>Website content is captured in <ExternalLink href='https://web.archive.org/web/20220711192706/https://www.hydrowhalesclub.com/' text='wayback machine' /></>) }
]

export const redFlags = []

const score = 10

export const overview = {
  project: 'OMNI Birds',
  slug: 'omnibirds',
  researcher: PrivateSniper,
  points: { good: goodPoints.length, bad: redFlags.length },
  score
}

const OmniBirds: NextPage = () => {
  const title = 'Research: OMNI Birds (OMNI Money)'
  const content = (
    <>
      <div className='guide'>
        <Disclaimer />
        TLDR: Overall Rating: 🟩 (10) Excellent
        <p>TLDR: What is this about?: NFT provides lifetime access to OMNI money application, OMNI will be the hub for financial education and a single overview of all of your assets and liabilities, complete net worth.</p>
        <h2 className='text-secondary'>Links</h2>
        <ul>
          <li>Official Website: <ExternalLink href='https://www.omnibirds.com/' /></li>
          <li>OpenSea: <ExternalLink href='https://opensea.io/collection/omnibirds-official' /></li>
          <li><ExternalLink href='http://discord.gg/omnibirds' text='Discord' /></li>
        </ul>
        <h2 className='text-secondary'>Good Factors</h2>
        <ul>
          {goodPoints.map(good => (<li key={good.key}>{tick}{good.content}</li>))}
        </ul>
        <h2 className='text-secondary'>Red Flags?</h2>
        <ul>
          {redFlags.length === 0 && <li>{tick} None found for this project.</li>}
        </ul>
        <h2 className='text-secondary'>Potential Risks</h2>
        <p>{warn} As with any crypto project, the underlying assets (BTC) could decrease in price, so your rewards for being a holder are not gauranteed to be stable consistently.</p>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'research/omnibirds',
      author: PrivateSniper,
      description: 'Research: OMNI Birds'
    }} />
  )
}

export default OmniBirds
