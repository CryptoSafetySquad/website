import type { NextPage } from 'next'
import Page from '../Components/Page'

const Referrals: NextPage = () => {
  const title = 'Referrals'
  const content = (
    <>
      <p>For some referrals we may make some bonus commissions, or you may make some, or both, using our links is a way to support our authors for providing this free resource.</p>

      <h2 className='text-secondary mb-4'>Exchanges</h2>
      <div className='grid grid-cols-4 gap-2'>
        <a className='mb-2' href='https://www.binance.com/en/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00Z6XZLBQ0' target='_blank' rel='noopener noreferrer'>
          <img style={{height: '30px'}} alt='Binance' src='/images/logos/binance.svg' />
        </a>
        <a className='mb-2' href='https://www.kucoin.com/r/rf/rJQQK1S' target='_blank' rel='noopener noreferrer'>
          <picture>
            <img alt='KuCoin' src='https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg' />
          </picture>
        </a>
        <a href='https://www.gate.io/signup/11213076' target='_blank' rel='noopener noreferrer'>
          <img style={{height: '30px'}} src='https://www.gate.io/images/logo/open_sesame_night.png?v=4' />
        </a>
        <a className='mb-2 flex' href='https://coinbase.com/join/craig_hcc?src=referral-link' target='_blank' rel='noopener noreferrer'>
          Coinbase
        </a>
      </div>

      <h2 className='text-secondary mt-4 mb-4'>Trading Platforms</h2>
      <div className='grid grid-cols-4 gap-2'>
        <a className='mb-2' href='https://www.pionex.com/en-US/sign/ref/idNmc3r4' target='_blank' rel='noopener noreferrer'>
          <img alt='Pionex' src='https://www.pionex.com/static/media/icon_nav_logo.c0918ec1.svg' />
        </a>
      </div>

      <h2 className='text-secondary mt-4 mb-2'>Author donations</h2>
      <p>If you would like to donate any funds to our authors they would be very appreciative.</p>
      <div className='grid grid-cols-3 mt-4'>
        <div className='card with-bg'>
          <h2 className='mb-2'>PrivateSniper</h2>
          <p className='text-sm mb-2'>Btc: <span className='text-secondary'>bc1q9hzu2hwe5g0c7mks4jd0nzm65qle62njdu7zcg</span></p>
          <p className='text-sm mb-2'>Eth: <span className='text-secondary'>0xdC386A6A27C6D21D1eDC96Ba8b427FbA545c1E1B</span></p>
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
