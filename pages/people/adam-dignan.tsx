import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../../Components/Page'
import TabbedContent from '../../Components/TabbedContent'
import Adam from '../../data/people/AdamDignan'

const AdamDignan: NextPage = () => {
  const title = 'People: Adam Dignan'
  const content = (
    <>
      <div className='card'>
        <h1 className='mb-4'>Projects</h1>
        <p><Link href='/projects/hydro-whales'><a>HydroWhales Mining Club</a></Link></p>
        <p><Link href='/projects/project79'><a>Project 79</a></Link></p>
        <p><Link href='/projects/ocean-money'><a>Ocean Money</a></Link></p>
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      slug: 'adam-dignan',
      content,
      description: 'Adam Dignan',
      sidebarContent: (
        <>
        {Adam.socials.discord && (
          <div className='card flex'>
            <img className='mr-2' src='/images/icons/discord.svg' width='24' height='24'  alt='Discord Username:' />
            {Adam.socials.discord}
          </div>
        )}
          <div className='card'>
            <a href='https://www.hydrowhalesclub.com/#team' target='_blank' rel='noopener noreferrer'>HydroWhales Team</a>
          </div>
        </>
      )
    }} />
  )
}

export default AdamDignan
