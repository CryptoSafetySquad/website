import Head from 'next/head'
import Image from 'next/image'
import JsonLd from './JsonLd';

export interface AuthorProps {
  fullname?: string;
  firstName?: string;
  lastName?: string;
  nickname: string;
  content?: React.ReactNode;
  image?: string | false;
  socials?: {
    linkedin?: string;
  },
  guidesCount?: number;
  researchCount?: number;
  wallets?: {
    btc?: string;
    eth?: string;
  }
}

const AuthorComponent = ({ nickname, content, fullname, image, socials, wallets }: AuthorProps) => {
  const jsonLdData: any = {
    "@context": "https://schema.org",
    "@type": "Person",
  };
  if (fullname) {
    jsonLdData.name = fullname
  }
  if (socials && socials.linkedin) {
    jsonLdData.sameAs = socials.linkedin
  }

  return (
    <div>
      <div className='author grid grid-cols-[30%,1fr] xl:grid-cols-1 gap-4'>
        {image && <img src={image} />}
        <div className='pr-4 xl:pr-0'>
          <h2>{fullname} {fullname && nickname && `aka `} {nickname}</h2>
          {socials && socials.linkedin && <a className='link-small' href={socials.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>}
          
          <div className='mt-4'>
            {content}
          </div>

          {wallets && (wallets.btc || wallets.eth) ? (
            <>
              <p>If you would like to tip the author:</p>
              {wallets.btc && <p className='break-words'>Btc: {wallets.btc}</p>}
              {wallets.eth && <p className='break-words'>Eth: {wallets.eth}</p>}
            </>
          ) : null}
        </div>
        
        <JsonLd json={jsonLdData} />
      </div>
    </div>
  )
}

export default AuthorComponent
