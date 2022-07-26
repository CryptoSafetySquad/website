import type { NextPage } from 'next'
import Page from '../Components/Page'
import PrivateSniper from '../data/authors/PrivateSniper'
import AuthorComponent from '../Components/Author'

const AdBlock: NextPage = () => {
  const title = 'Authors'
  const authors = [PrivateSniper]
  const content = (
    <div className='grid grid-cols-3'>
      {authors.map(author => <AuthorComponent {...author} />)}
    </div>
  )

  return (
    <Page {...{
      title,
      slug: 'authors',
      content,
      description: 'Our guide and content writers.'
    }} />
  )
}

export default AdBlock
