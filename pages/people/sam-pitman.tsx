import type { NextPage } from 'next'
import Link from 'next/link'
import Sam from '../../data/people/SamPitman'
import Person from '../../Components/Person'

const SamPitman: NextPage = () => {
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
    <Person {...{
      person: Sam,
      name: 'Sam Pitman',
      slug: 'sam-pitman',
      content,
      sidebarContent: (
        <>
          <div className='card'>
            <a href='https://www.hydrowhalesclub.com/#team' target='_blank' rel='noopener noreferrer'>HydroWhales Team</a>
          </div>
        </>
      )
    }} />
  )
}

export default SamPitman
