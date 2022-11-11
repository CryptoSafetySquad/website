import type { NextPage } from 'next'
import Link from 'next/link'
import Page from './Page'

const Person = ({ name, content, slug, person, sidebarContent }) => {
  const title = `People: ${name}`

  return (
    <Page {...{
      title,
      slug: slug,
      content,
      description: name,
      sidebarContent: (
        <>
          {person.socials.discord && (
              <div className='card flex'>
                <img className='mr-2' src='/images/icons/discord.svg' width='24' height='24' alt='Discord Username:' />
                {person.socials.discord}
              </div>
          )}
          {sidebarContent ? sidebarContent : null}
        </>
      )
    }} />
  )
}

export default Person
