import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Page from '../../Components/Page'

const AdBlock: NextPage = () => {
  const title = 'Ad-blocking with uBlock Origin and Installing CryptoSafetySquad AdBlock filters'
  const content = (
    <>
      <p>One of the easiest ways to prevent mistakenly clicking on a malicious link is to have up to date filters that pro-actively block some of the most well known bad urls.</p>
      <p>While this doesn&apos;t guarantee you&apos;ll never click on a bad link, it&apos;s a very easy to set up first step which can help you to think if a website is legitimate or not.</p>

      <h2 className='my-4'>Step 1: Install uBlock</h2>
      <p className='mb-2'>We have created a bunch of filters for adblocking extensions (works with Adblock or uBlock Origin) - we highly recommend uBlock Origin</p>
      <p className='mb-2'>To install uBlock Origin go <a href='https://github.com/gorhill/uBlock' target='_blank' rel='noreferrer noopener'>here</a> and click the link for your web browser.</p>
      <h2 className='my-4'>Step 2: Add custom filters</h2>
      <ul>
      <li>click uBlock icon</li>
      <li>go to dashboard (settings cog)</li>
      <li>under custom click import</li>
      <li>paste in the URL:</li>
      </ul>
      <div className='code'>
      <p>https://raw.githubusercontent.com/MetaGamersGuild/ublock-filters/main/crypto.txt</p>
      </div>
      <p className='mb-8'>Click apply changes and the lists filters should now be applied in the browser.</p>
      {/* <Discussion slug='guides/adblock' title='AdBlocking' /> */}
    </>
  );
  const pageProps = {
    title,
    content,
    slug: 'guides/adblock'
  }

  return (
    <Page {...pageProps} />
  )

  return (
    <div>
      <Head>
        <title>Crypto Safety Squad | Home</title>
        <meta name="description" content="A community project dedicated to onboarding new users safely into CryptoCurrencies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-7xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
        
      </main>
    </div>
  )
}

export default AdBlock
