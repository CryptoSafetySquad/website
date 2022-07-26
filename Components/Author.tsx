import Head from 'next/head'
import Image from 'next/image'

export interface AuthorProps {
  nickname?: string;
  fullname?: string;
  slug: string;
  content?: React.ReactNode;
  image?: string | false;
  socials?: {
    linkedin?: string;
  }
}

const AuthorComponent = ({ nickname, slug, content, fullname, image, socials }: AuthorProps) => {
  return (
    <div>
      <div className='author'>
        <h2>Author: {fullname} {fullname && nickname && `aka `} {nickname}</h2>
        {socials && socials.linkedin && <a className='link-small' href={socials.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>}
        {image && <img src={image} />}
        <div className='mt-4'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default AuthorComponent
