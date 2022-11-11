import type { NextPage } from 'next'
import Link from 'next/link'
import David from '../../data/people/DavidCraig'
import Person from '../../Components/Person'

const AdamDignan: NextPage = () => {
  const content = (
    <>
      <div className='card'>
        <p>Investor, CryptoSafetySquad Author</p>
      </div>
    </>
  )

  return (
    <Person {...{
      person: David,
      name: 'David Craig',
      slug: 'david-craig',
      content,
    }} />
  )
}

export default AdamDignan
