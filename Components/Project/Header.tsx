import ExternalLink from "../ExternalLink"

interface ProjectHeaderProps {
  name: string;
  website?: string;
  opensea?: string;
  twitter?: string;
  className?: string;
  description?: any;
  bannerImage?: string;
}

const Header = ({ className, name, website, opensea, description, twitter, bannerImage }: ProjectHeaderProps) => {
  const linkIcon = <img alt='Website Link' className='mr-2' src='/images/icons/external.svg' height='20' width='20' />
  const openseaIcon = <img alt='OpenSea Link' className='mr-2' src='/images/icons/opensea.svg' height='22' width='22' />
  const twitterIcon = <img alt='OpenSea Link' className='mr-2' src='/images/icons/twitter.svg' height='22' width='22' />

  return (
    <div>
      {bannerImage && <div className='mb-4 rounded-md' style={{ height: '400px', backgroundSize: 'cover', backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}></div>}
      <h1 className={`flex ${className} mb-2`}>
        <span className='mr-4'>{name}</span>
        {website && <ExternalLink href={`${website}`}>{linkIcon}</ExternalLink>}
        {opensea && <ExternalLink href={`${opensea}`}>{openseaIcon}</ExternalLink>}
        {twitter && <ExternalLink href={`https://twitter.com/${twitter}`}>{twitterIcon}</ExternalLink>}
      </h1>
      {description}
    </div>
  )
}

export default Header
