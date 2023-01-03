import Image from "next/image"
import Link from "next/link"
import { Roboto_Mono } from '@next/font/google'

const RobotoMono = Roboto_Mono({
  weight: '100'
})

const links = [
  { href: '/guides', text: 'Guides' },
  { href: '/projects', text: 'Projects' },
  { href: '/general-tips', text: 'General Tips' },
  { href: '/ecosystems', text: 'Ecosystems' },
  { href: '/referrals', text: 'Referrals' },
  { href: '/videos', text: 'Videos' },

]

const Navbar = () => (
  <nav className={`${RobotoMono.className} p-2 md:p-4 flex flex-col md:flex-row`}>
    <div className='xl:ml-16 mr-8 xl:mr-16 mb-4 md:mb-0'>
      <Link className='text-sm' href='/'>Crypto Safety Squad</Link>
    </div>
    <div className='flex flex-col md:flex-row'>
      {
        links.map(l => <Link key={l.href} className='mr-4 mb-2 text-sm md:mb-0' href={l.href}>{l.text}</Link>)  
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
