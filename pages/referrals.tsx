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

      <h2 className='text-secondary'>Exchanges</h2>
      <ul>
        {
          exchanges.map((e) => (
            <li key={e.name}>
              <a href={e.href} target='_blank' rel='noopener noreferrer'>
                {e.name}
              </a>
            </li>
          ))
        }
      </ul>

      <h2 className='text-secondary'>Trading Platforms</h2>
      <ul>
        {
          trading.map((t) => (
            <li key={t.name}>
              <a href={t.href} target='_blank' rel='noopener noreferrer'>
                {t.name}
              </a>
            </li>
          ))
        }
      </ul>

      <h2 className='text-secondary'>Author donations</h2>
      <p>If you would like to donate any funds to our authors they would be very appreciative.</p>
      <div className='grid grid-cols-3'>
        <div>
          <h2>PrivateSniper</h2>
          <p>Btc: <span className='text-secondary'>bc1q9hzu2hwe5g0c7mks4jd0nzm65qle62njdu7zcg</span></p>
          <p>Eth: <span className='text-secondary'>0xF311fFe5b49fdE6BdED1342694EDdD7C9003a922</span></p>
        </div>
      </div>
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
