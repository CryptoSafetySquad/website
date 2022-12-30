import { AuthorProps } from '../../Components/Author'

const PrivateSniper: AuthorProps = {
  nickname: 'PrivateSniper',
  fullname: 'David',
  image: '/images/authors/PrivateSniper.png',
  content: (
    <>
      <p>David started with crypto in 2021.</p>
      <p>He got hacked and lost a game NFT quite early in his journey and since then has taken it upon himself to try and help educate others in the crypto space to hopefully help them avoid the mistakes he made.</p>
    </>
  ),
  guidesCount: 2,
  researchCount: 1,
  wallets: {
    btc: 'bc1q9hzu2hwe5g0c7mks4jd0nzm65qle62njdu7zcg',
    eth: '0xdC386A6A27C6D21D1eDC96Ba8b427FbA545c1E1B'
  }
}

export default PrivateSniper
