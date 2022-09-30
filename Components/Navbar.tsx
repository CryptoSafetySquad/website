import Link from "next/link"

const Navbar = () => (
  <div className='p-4 flex'>
    <div className='ml-16 mr-16'>
      <Link href='/'><a>Crypto Safety Squad</a></Link>
    </div>
    <div>
      <Link href='/guides'><a className='mr-8'>Guides</a></Link>
      <Link href='/projects'><a className='mr-8'>Projects</a></Link>
    </div>
    <div className='flex ml-auto mr-16'>
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
