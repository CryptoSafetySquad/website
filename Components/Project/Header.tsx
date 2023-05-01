import ExternalLink from "../ExternalLink"
import Banner from "./Banner"

interface ProjectHeaderProps {
  name: string;
  website?: string;
  opensea?: string | string[];
  twitter?: string;
  className?: string;
  description?: any;
  bannerImage?: string;
  status?: string;
}

const Header = ({ className, name, website, opensea, description, twitter, bannerImage, status }: ProjectHeaderProps) => {
  const linkIcon = <img alt='Website Link' className='mr-2' src='/images/icons/external.svg' height='20' width='20' />
  const openseaIcon = <img alt='OpenSea Link' className='mr-2' src='/images/icons/opensea.svg' height='22' width='22' />
  const twitterIcon = <img alt='Twitter' className='mr-2' src='/images/icons/twitter.svg' height='22' width='22' />

  return (
    <div className="grid project-header grid-cols-[minmax(350px,1fr),4fr] gap-16 mb-4">
      <div className="header__content">
        <h1 className={`card__header rounded-l-lg h-full ${className}`}>
          <p className='mb-4'>{name} {status && (<>({status})</>)}</p>
          {description && (
            <span className='text-sm mb-4'>{description}</span>
          )}
          <div className="flex">
            {website && <ExternalLink href={`${website}`}>{linkIcon}</ExternalLink>}
            {opensea && (typeof opensea == 'string')  && <ExternalLink href={`${opensea}`}>{openseaIcon}</ExternalLink>}
            {opensea && (typeof opensea == 'object') && opensea.map((sea: string) => <ExternalLink key={sea} href={`${sea}`}>{openseaIcon}</ExternalLink>)}
            {twitter && <ExternalLink href={`https://twitter.com/${twitter}`}>{twitterIcon}</ExternalLink>}
          </div>
        </h1>
      </div>
      <Banner bannerImage={bannerImage} />
    </div>
  )
}

export default Header
