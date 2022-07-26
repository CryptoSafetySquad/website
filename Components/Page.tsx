import Head from 'next/head'
import { AuthorProps, default as Author } from './Author'
import Navbar from './Navbar'

interface PageComponentProps {
  title: string;
  slug: string;
  description: string;
  content: React.ReactNode;
  author?: AuthorProps;
}

const Page = ({ title, slug, content, description, author }: PageComponentProps) => {
  return (
    <div>
      <Head>
        <title>Crypto Safety Squad | {title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className='max-w-5xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
        <h1 className='mt-6 mb-12'>{title}</h1>
        <div className='grid grid-cols-[70%,1fr] gap-4'>
          <div>
            {content}
          </div>
          {author && <Author {...author} />}
        </div>
        {/* <Discussion slug='guides/adblock' title='AdBlocking' /> */}
      </main>
    </div>
  )
}

export default Page
