import ExternalLink from "../ExternalLink"

interface ProjectHeaderProps {
  name: string;
  website?: string;
  opensea?: string;
  className?: string;
  description?: any;
}

const Header = ({ className, name, website, opensea, description }: ProjectHeaderProps) => {
  const linkIcon = <img className='mr-2' src='/images/icons/external.svg' height='20' width='20' />
  const openseaIcon = <img className='mr-2' src='/images/icons/opensea.svg' height='22' width='22' />

  return (
    <div>
      <h1 className={`flex ${className} mb-2`}>
        <span className='mr-4'>{name}</span>
        {website && <ExternalLink href={`${website}`}>{linkIcon}</ExternalLink>}
        {opensea && <ExternalLink href={`${opensea}`}>{openseaIcon}</ExternalLink>}
      </h1>
      {description}
    </div>
  )
}

export default Header
