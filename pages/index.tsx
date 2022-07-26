import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <a href="/guides/adblock" className={styles.card}>
            <h2>AdBlock</h2>
            <p>Improve browser security by blocking known bad websites.</p>
          </a>

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
