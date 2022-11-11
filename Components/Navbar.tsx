import Link from "next/link"

const Navbar = () => (
  <div className='p-4 flex'>
    <div className='xl:ml-16 mr-4 xl:mr-16'>
      <Link href='/'><a>Crypto Safety Squad</a></Link>
    </div>
    <div>
      <Link href='/guides'><a className='mr-8'>Guides</a></Link>
      <Link href='/projects'><a className='mr-8'>Projects</a></Link>
      <Link href='/general-tips'><a className='mr-8'>General Tips</a></Link>
      <Link href='/referrals'><a className='mr-8'>Referrals</a></Link>
      <Link href='/videos'><a className='mr-8'>Video&apos;s</a></Link>
    </div>
    <div className='flex ml-auto mr-4 xl:mr-16'>
      <a
        href='https://discord.gg/2R7JETvAsc'
        target='_blank'
        rel='noopener noreferrer'
        className='mr-4'
      >
        <img src='/images/icons/discord.svg' width='24' height='24' />
      </a>
      <a
        href='https://github.com/CryptoSafetySquad'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='/images/icons/github.svg' width='24' height='24' />
      </a>
    </div>
  </div>
)

export default Navbar
