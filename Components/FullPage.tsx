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
  sidebarContent?: React.ReactNode;
}

const FullPage = ({ title, slug, content, description, author, withCommenting, header, sidebarContent }: PageComponentProps) => {
  const hasSidebar = author || sidebarContent;
  const contentClasses = hasSidebar ? 'grid-cols-[minmax(350px,1fr),4fr] gap-16' : 'grid-cols-[100%]'

  return (
    <div className='h-full' style={{
      minHeight: '100vh',
      backgroundImage: 'var(--bg-image)',
      backgroundSize: 'cover',
      backgroundPosition: 'left top'
    }}>
      <Head>
        <title>Crypto Safety Squad | {`${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className='m-auto pt-4 px-2 md:px-4 bg-dark rounded-md'>
        {
          header
          ? (
            <>
              {header}
            </>
          )
          : (
            <div>
              <h1 className='text-2xl text-secondary mt-6 mb-12'>{`${title}`}</h1>
            </div>
          )
        }

        <div className={`xl:grid ${contentClasses}`}>
          {hasSidebar && (
            <aside>
              {
                author && (
                  <div className='card'>
                    <h2 className='mb-2'>About the author</h2>
                    <Author {...author} />
                  </div>
                )
              }
              {sidebarContent}
            </aside>
          )}
          <div>
            {content}
          </div>
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

export default FullPage
