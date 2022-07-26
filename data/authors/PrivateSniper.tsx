import { AuthorProps } from '../../Components/Author'

const PrivateSniper: AuthorProps = {
  nickname: 'PrivateSniper',
  fullname: 'David Craig',
  image: '/images/authors/PrivateSniper.png',
  socials: {
    linkedin: 'https://www.linkedin.com/in/davidcraig86/'
  },
  content: (
    <>
      <p>David started with crypto in 2021.</p>
      <p>He got hacked and lost a game NFT quite early in his journey and since then has taken it upon himself to try and help educate others in the crypto space to hopefully help them avoid the mistakes he made.</p>
    </>
  ),
  guidesCount: 2,
  researchCount: 1
}

export default PrivateSniper
