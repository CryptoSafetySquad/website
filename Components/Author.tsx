import Head from 'next/head'
import Image from 'next/image'
import JsonLd from './JsonLd';

export interface AuthorProps {
  nickname?: string;
  fullname?: string;
  content?: React.ReactNode;
  image?: string | false;
  socials?: {
    linkedin?: string;
  }
}

const AuthorComponent = ({ nickname, content, fullname, image, socials }: AuthorProps) => {
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
      <div className='author'>
        <h2>{fullname} {fullname && nickname && `aka `} {nickname}</h2>
        {socials && socials.linkedin && <a className='link-small' href={socials.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>}
        {image && <img src={image} />}
        <div className='mt-4'>
          {content}
        </div>
        <JsonLd json={jsonLdData} />
      </div>
    </div>
  )
}

export default AuthorComponent
