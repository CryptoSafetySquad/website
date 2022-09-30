import Head from 'next/head'
import { AuthorProps, default as Author } from './Author'
import Navbar from './Navbar'
import Discussion from './Discussion';

export interface PageComponentProps {
  title: string;
  slug: string;
  description: string;
  header?: React.ReactNode;
  content: React.ReactNode;
  author?: AuthorProps;
  withCommenting?: boolean;
}

const Page = ({ title, slug, content, description, author, withCommenting, header }: PageComponentProps) => {
  const contentClasses = author ? 'grid-cols-[70%,1fr]' : 'grid-cols-[100%]'

  return (
    <div>
      <Head>
        <title>Crypto Safety Squad | {`${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className='max-w-7xl m-auto py-4 px-2 md:py-12 md:px-4 bg-dark rounded-md'>
        <div className={`xl:grid ${contentClasses} gap-16`}>
          {
            header
            ? (
              <>
                <div className='mt-6 mb-12'>
                  {header}
                </div>
                <div>
                  {content}
                </div>
              </>
            )
            : (
              <div>
                <h1 className='mt-6 mb-12'>{`${title}`}</h1>
                {content}
              </div>
            )
          }
          {author && (
            <aside>
              <h2 className='mb-2'>About the author</h2>
              <Author {...author} />
            </aside>
          )}
        </div>
        {
          withCommenting === true && (
            <Discussion slug={slug} title={`${title}`} />
          )
        }
      </main>
    </div>
  )
}

export default Page
