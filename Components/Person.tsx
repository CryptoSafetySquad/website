import Page from './Page'

interface PersonPageProps {
  name: string;
  content: any;
  slug: string;
  person: any;
  sidebarContent?: any;
}

const Person = ({ name, content, slug, person, sidebarContent }: PersonPageProps) => {
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
          {person.socials.twitter && (
              <div className='card flex'>
                {/* <img className='mr-2' src='/images/icons/discord.svg' width='24' height='24' alt='Discord Username:' /> */}
                <a rel='noopener noreferrer' target='_blank' href={`https://twitter.com/${person.socials.twitter}`}>@{person.socials.twitter}</a>
              </div>
          )}
          {sidebarContent ? sidebarContent : null}
        </>
      )
    }} />
  )
}

export default Person
