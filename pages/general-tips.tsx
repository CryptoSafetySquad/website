import type { NextPage } from 'next'
import Page from '../Components/Page'
import PrivateSniper from '../data/authors/PrivateSniper'

const GeneralTips: NextPage = () => {
  const title = 'General Safety Tips'
  const content = (
    <>
      <div className='guide'>
        <h3 className='text-secondary'>General</h3>
        <ul>
          <li>Best Practice: Whenever you are no longer interacting with a dApp, disconnect it, if you are unsure how to do this ask in discord.</li>
          <li>Best Practice: Create different wallets for different purposes, keep your assets spread about (if one wallet has everything and it gets hacked you may lose everything).</li>
        </ul>
        <h3 className='text-secondary'>Hardware Wallets (Ledger/Trezor/etc)</h3>
        <ul>
          <li>Never ever type the seedphrase on any device (pc/tablet/phone).</li>
        </ul>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'general-tips',
      author: PrivateSniper,
      description: 'General Safety Tips'
    }} />
  )
}

export default GeneralTips
