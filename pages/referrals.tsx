import type { NextPage } from 'next'
import Page from '../Components/Page'

const exchanges = [
  { name: 'KuCoin', href: 'https://www.kucoin.com/r/rf/rJQQK1S' },
  { name: 'Binance', href: 'https://www.binance.me/en/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00Z6XZLBQ0' }
]
const trading = [
  { name: 'Pionex', href: 'https://www.pionex.com/en-US/sign/ref/idNmc3r4' }
]

const Referrals: NextPage = () => {
  const title = 'Referrals'
  const content = (
    <>
      <p>For some referrals we may make some bonus commissions, or you may make some, or both, using our links is a way to support our authors for providing this free resource.</p>
      <h2>Exchanges</h2>
      {
        exchanges.map((e) => (
          <>
            <a href={e.href} target='_blank' rel='noopener noreferrer'>
              {e.name}
            </a>
          </>
        ))
      }
      <h2>Trading Platforms</h2>
      {
        trading.map((t) => (
          <>
            <a href={t.href} target='_blank' rel='noopener noreferrer'>
              {t.name}
            </a>
          </>
        ))
      }
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'referrals',
      description: 'Referrals'
    }} />
  )
}

export default Referrals
