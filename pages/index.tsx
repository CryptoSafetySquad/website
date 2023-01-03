import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../Components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='home h-full' style={{
      minHeight: '100vh',
      backgroundImage: 'var(--bg-image)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Head>
        <title>Crypto Safety Squad | Home</title>
        <meta name="description" content="A community project dedicated to onboarding new users safely into CryptoCurrencies." />
      </Head>

      <Navbar />

      <main className='h-full py-16' style={{
        // background: 'rgba(0,0,0,0.2)',
      }}>
        <h1 className='text-4xl text-center'>
          About Crypto Safety Squad
        </h1>

        <p className='px-16 mt-16 mb-8 text-xl max-w-2xl m-auto'>
          Our mission is to provide information and resources to help keep our members and visitors safe while interacting with crypto currency and making good yield investments.
        </p>

        <p className='px-16 p-4 text-sm max-w-2xl m-auto'>
          Use the navigation at the top of the page to explore our site
        </p>
      </main>
    </div>
  )
}

export default Home
