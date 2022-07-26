import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const cards = [
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Crypto Safety Squad
        </h1>

        <p className={styles.description}>
          Community dedicated to safely onboarding new users to the world of Crypto
        </p>

        <div className={styles.grid}>
          {
            cards.map(card => (
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
    </div>
  )
}

export default Home
