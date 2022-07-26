import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const guides = [
  {
    url: '/guides/adblock',
    title: 'AdBlock',
    description: 'Improve browser security by blocking known bad websites.'
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Safety Squad | Home</title>
        <meta name="description" content="A community project dedicated to onboarding new users safely into CryptoCurrencies." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Crypto Safety Squad
        </h1>

        <p className={styles.description}>
          Community dedicated to safely onboarding new users to the world of Crypto and providing ongoing support
        </p>

        <h2>Guides</h2>
        <div className={styles.grid}>
          {
            guides.map(card => (
              <a key={card.url} href={card.url} className={styles.card}>
                <p className={`${styles.cardTitle} mb-2`}>{card.title}</p>
                <p>{card.description}</p>
              </a>
            ))
          }

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}
        </div>
      </main>

      <div className='flex' style={{position: 'fixed', bottom: '1rem', right: '1rem'}}>
        <a
          href='https://discord.gg/2R7JETvAsc'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <img src='/images/icons/discord.svg' width='48' height='48' />
        </a>
        <a
          href='https://github.com/CryptoSafetySquad'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/images/icons/github.svg' width='48' height='48' />
        </a>
      </div>
    </div>
  )
}

export default Home
