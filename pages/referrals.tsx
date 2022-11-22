import type { NextPage } from 'next'
import Page from '../Components/Page'

const Referrals: NextPage = () => {
  const title = 'Referrals'
  const content = (
    <>
      <p>For some referrals we may make some bonus commissions, or you may make some, or both, using our links is a way to support our authors for providing this free resource.</p>

      <h2 className='text-secondary mb-2'>Exchanges</h2>
      <div className='grid grid-cols-4 gap-2'>
        <a className='mb-2' href='https://www.kucoin.com/r/rf/rJQQK1S' target='_blank' rel='noopener noreferrer'>
          <img alt='KuCoin' src='https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg' />
        </a>
        <a className='mb-2 flex' href='https://coinbase.com/join/craig_hcc?src=referral-link' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coinbase logo" viewBox="0 0 48 48" width="32" height="32"><title>Coinbase logo</title><path d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z" fill="#FFFFFF"></path></svg>
          <p className='ml-4'>Coinbase</p>
        </a>
      </div>

      <h2 className='text-secondary mt-4 mb-2'>Trading Platforms</h2>
      <div className='grid grid-cols-4 gap-2'>
        <a className='mb-2' href='https://www.pionex.com/en-US/sign/ref/idNmc3r4' target='_blank' rel='noopener noreferrer'>
          <img alt='Pionex' src='https://www.pionex.com/static/media/icon_nav_logo.c0918ec1.svg' />
        </a>
      </div>

      <h2 className='text-secondary mt-4 mb-2'>Author donations</h2>
      <p>If you would like to donate any funds to our authors they would be very appreciative.</p>
      <div className='grid grid-cols-3 mt-4'>
        <div className='card'>
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
