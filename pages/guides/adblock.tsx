import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'

const AdBlock: NextPage = () => {
  const title = 'Ad-blocking with uBlock Origin and Installing CryptoSafetySquad AdBlock filters'
  const content = (
    <>
      <div className='guide'>
        <p>One of the easiest ways to prevent mistakenly clicking on a malicious link is to have up to date filters that pro-actively block some of the most well known bad urls.</p>
        <p>While this doesn&apos;t guarantee you&apos;ll never click on a bad link, it&apos;s a very easy to set up first step which can help you to identify if a website is legitimate or not.</p>

        <p>We have created a filterlist for adblocking extensions (works with Adblock or uBlock Origin) - we highly recommend uBlock Origin (uBo).</p>
        <h2>Step 1: Install uBlock</h2>
        <p>To install uBlock Origin go <a href='https://github.com/gorhill/uBlock' target='_blank' rel='noreferrer noopener'>here</a> and click the link for your web browser.</p>
        <h2>Step 2: Add custom filters</h2>
        <ol>
        <li>click uBlock icon</li>
        <li>go to dashboard (settings cog)</li>
        <li>under custom click import</li>
        <li>paste in the URL:</li>
        </ol>
        <p><span className='string'>https://raw.githubusercontent.com/CryptoSafetySquad/adblock-filters/refs/heads/main/fake-news.txt</span></p>
        <p className='mb-8'>Click apply changes and the lists filters should now be applied in the browser, uBo will now automatically keep this list up to date regularly.</p>
        <p>Note: uBlock does also include a lot of other filter lists out of the box, if you dont wan&apos;t to use any of these you can simply untick them, I personally keep them all active.</p>
        <p>I hope you found this guide useful and that it helps keep you that little bit more secure in your crypto journey.</p>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'guides/adblock',
      author: PrivateSniper,
      description: 'A security guide to use adblocking features of ublock origin to help secure browsers',
      // withCommenting: true
    }} />
  )
}

export default AdBlock
