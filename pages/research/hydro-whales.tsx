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
      Core team fully <abbr title='Doxxed means personal data is available about team members, photo, work history, social media profiles etc.'>doxxed</abbr>: <ExternalLink href='https://www.hydrowhalesclub.com/#team' />
    </>
  )
  
}

const goodPoints = [
  { key: 'doxxed', content: doxxed() },
  { key:'legal', content: 'Has legal team on retainer' },
  { key:'whitepaper', content: 'Full whitepaper' },
  { key:'wayback', content: (<>Website content is captured in <ExternalLink href='https://web.archive.org/web/20220711192706/https://www.hydrowhalesclub.com/' text='wayback machine' /></>) }
]

const HydroWhales: NextPage = () => {
  const title = 'Research: Hydro Whales Mining Club'
  const content = (
    <>
      <div className='guide'>
        <Disclaimer />
        TLDR: Overall Rating: 🟩 (10) Excellent
        <p>TLDR: What is this about?: A passive income focused community, powered by bitcoin mining and community voted investments.</p>
        <h2 className='text-secondary'>Links</h2>
        <ul>
          <li>Official Website: <ExternalLink href='https://www.hydrowhalesclub.com/' /></li>
          <li>Official Dashboard: <ExternalLink href='https://dashboard.hydrowhalesclub.com/' /></li>
          <li>OpenSea: <ExternalLink href='https://opensea.io/collection/hydro-whales-mining-club-official' /></li>
          <li><ExternalLink href='https://discord.gg/hydrowhales' text='Discord' /></li>
        </ul>
        <h2 className='text-secondary'>Good Factors</h2>
        <ul>
          {goodPoints.map(good => (<li key={good.key}>{tick}{good.content}</li>))}
        </ul>
        <h2 className='text-secondary'>Red Flags?</h2>
        <ul>
          <li>{tick} None found for this project.</li>
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
      slug: 'research/hydro-whales',
      author: PrivateSniper,
      description: 'Research: Hydro Whales Mining Club'
    }} />
  )
}

export default HydroWhales
