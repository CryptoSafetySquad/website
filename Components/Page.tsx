import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface PageComponentProps {
    title?: string;
    slug?: string;
    children?: any;
}

const Page: NextPage = (props: PageComponentProps) => {
  const { title, slug, children } = props
  return (
    <div>
      <Head>
        <title>Crypto Safety Squad | Home</title>
        <meta name="description" content="A community project dedicated to onboarding new users safely into CryptoCurrencies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-5xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
        <h1 className='mt-6 mb-12'>{title}</h1>
        {children}
        {/* <Discussion slug='guides/adblock' title='AdBlocking' /> */}
      </main>
    </div>
  )
}

export default Page
