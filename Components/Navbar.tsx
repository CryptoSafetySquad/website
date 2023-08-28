import Image from "next/image"
import Link from "next/link"

const links = [
  { href: '/guides', text: 'Guides' },
  { href: '/projects', text: 'Projects' },
  { href: '/general-tips', text: 'General Tips' },
  { href: '/ecosystems', text: 'Ecosystems' },
  { href: '/referrals', text: 'Referrals' },
  { href: '/videos', text: 'Videos' },

]

const Navbar = () => (
  <nav className={`p-2 md:p-4 flex flex-col md:flex-row`}>
    <div className='flex flex-col md:flex-row'>
      <Link className='text-sm mr-8 xl:mr-16 xl:ml-16 my-6 md:my-0' href='/'>Crypto Safety Squad</Link>
      {
        links.map(l => <Link key={l.href} className='text-right mr-4 mb-6 text-sm md:mb-0' href={l.href}>{l.text}</Link>)  
      }
    </div>
    <div className='sm:flex md:ml-auto mr-4 xl:mr-16 hidden'>
      <a
        href='https://discord.gg/2R7JETvAsc'
        target='_blank'
        rel='noopener noreferrer'
        className='mr-4'
      >
        <Image src='/images/icons/discord.svg' width='24' height='24' alt='discord' />
      </a>
      <a
        href='https://github.com/CryptoSafetySquad'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image alt='github' src='/images/icons/github.svg' width='24' height='24' />
      </a>
    </div>
  </nav>
)

export default Navbar
