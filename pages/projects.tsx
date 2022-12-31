import type { NextPage } from 'next'
import Page from '../Components/Page'
import projects from '../data/projects'

const BlochainIcon = ({ blockchain }: { blockchain: string | string[] | undefined; }) => {
  console.log(blockchain)
  if (!blockchain) {
    return null
  }

  function parseIcon(chain: string) {
    let iconSrc = ''
    let height = 20
    let width = 20
    switch (chain) {
      case 'Ethereum':
        iconSrc='/images/logos/eth-diamond-purple.png'
        width = 14
        break;
      case 'Binance':
        iconSrc='/images/icons/brand/binance.svg'
        break;
      case 'Polygon':
        iconSrc='/images/logos/polygon.png'
        break;
      default:
        break;
    }
  
    return (
      <img className={`mr-2 ml-auto`} style={{maxHeight: `${height}px`, width: `${width}px`, display: 'inline-block'}} src={iconSrc} width='20' height='20' />
    )
  }

  if (typeof (blockchain) == "string") {
    return parseIcon(blockchain)
  }
  if (typeof (blockchain) == "object") {
    return (<>{blockchain.map(b => parseIcon(b))}</>)
  }
  return null
}

const Projects: NextPage = () => {
  const title = 'Projects'
  const content = (
    <>
      <p>The projects here are just those we have done some research into, the content herein does not constitute financial advice</p>
      <p>Please do your own research before investing, we can take no responsibility for the performance of any investments you make.</p>
      <p>Ratings are of course subjective, your opinion may differ.</p>
      <h2 className='mb-2 text-green dark:text-green-darkmode'>Highly Rated Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
      {
        projects.bluechip.map(project => 
          project.slug && (
            <div className='card with-img' key={project.slug}>
              {
                project.bannerImage && 
                  <div style={{
                    height: '120px',
                    backgroundImage: `url(${project.bannerImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                  }}>
                  </div>
              }
              <div className='content'>
                <p><a href={`/projects/${project.slug}`}>{project.name}</a></p>
                <div className='flex justify-between'>
                  <span>{project.type}</span>
                  <span>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</span>
                </div>
              </div>
            </div>
          )
        )
      }
      </div>
      <h2 className='mb-2 text-blue dark:text-blue-darkmode'>Average Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
      {
        projects.average.map(project => 
          project.slug && (
            <div className='card with-img' key={project.slug}>
              {
                project.bannerImage && 
                  <div style={{
                    height: '120px',
                    backgroundImage: `url(${project.bannerImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                  }}>
                  </div>
              }
              <div className='content'>
                <p><a href={`/projects/${project.slug}`}>{project.name}</a></p>
                <div className='flex justify-between'>
                  <span>{project.type}</span>
                  <span>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</span>
                </div>
              </div>
            </div>
          )
        )
      }
      </div>
      <h2 className='mb-2 text-orange dark:text-orange-darkmode'>Risky Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
      {
        projects.risky.map(project => 
          project.slug && (
            <div className='card' key={project.slug}>
              <a className='flex justify-between' href={`/projects/${project.slug}`}>{project.name} <div>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</div></a>
            </div>
          )
        )
      }
      </div>
      <h2 className='mb-2 text-red dark:text-red-darkmode'>Rug Pulled Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
      {
        projects.rugpulled.map(project => 
          project.slug && (
            <div className='card' key={project.slug}>
              <a className='flex justify-between' href={`/projects/${project.slug}`}>{project.name} <div>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</div></a>
            </div>
          )
        )
      }
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'research',
      description: 'Research'
    }} />
  )
}

export default Projects
