import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface PageComponentProps {
  title: string;
  slug: string;
  description: string;
  content: React.ReactNode;
}

const Page = ({ title, slug, content, description }: PageComponentProps) => {
  return (
    <div>
      <Head>
        <title>Crypto Safety Squad | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-5xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
        <h1 className='mt-6 mb-12'>{title}</h1>
        {content}
        {/* <Discussion slug='guides/adblock' title='AdBlocking' /> */}
      </main>
    </div>
  )
}

export default Page
