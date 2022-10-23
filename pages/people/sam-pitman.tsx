import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../../Components/Page'
import TabbedContent from '../../Components/TabbedContent'
import Sam from '../../data/people/SamPitman'

const SamPitman: NextPage = () => {

  const tabs = [
    {
      title: 'Projects',
      content: (
        <>
          <p><Link href='/projects/hydro-whales'><a>HydroWhales Mining Club</a></Link></p>
          <p><Link href='/projects/project79'><a>Project 79</a></Link></p>
          <p><Link href='/projects/ocean-money'><a>Ocean Money</a></Link></p>
        </>
      )
    }
  ]

  const title = 'People: Sam Pitman'
  const content = (
    <>
      <TabbedContent content={tabs}></TabbedContent>
    </>
  )

  return (
    <Page {...{
      title,
      slug: 'sam-pitman',
      content,
      description: 'Sam Pitman',
      sidebarContent: (
        <>
        {Sam.socials.discord && (
            <div className='flex'>
              <img className='mr-2' src='/images/icons/discord.svg' width='24' height='24' alt='Discord Username:' />
              {Sam.socials.discord}
            </div>
        )}
        <a href='https://www.hydrowhalesclub.com/#team' target='_blank' rel='noopener noreferrer'>HydroWhales Team</a>
        </>
      )
    }} />
  )
}

export default SamPitman
