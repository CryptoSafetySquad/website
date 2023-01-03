import type { NextPage } from 'next'
import { useState } from 'react'

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

const projectCardList = (projects: any[]) => {
  return projects.map((project) => (
    project.slug && (
      <div className='card with-img with-bg bordered' key={project.slug}>
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
          <p className='text-sm'><a href={`/projects/${project.slug}`}>{project.name}</a></p>
          <div className='flex justify-between'>
            <span className='text-sm'>{project.type}</span>
            <span className='text-sm'>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</span>
          </div>
        </div>
      </div>
    )
  ))
}

const projectSimpleCardList = (projects: any[], cardClass?: string) => {
  return projects.map((project: any) => (
    project.slug && (
      <div className={`card with-bg`} key={project.slug}>
        <a className={`flex ${cardClass} text-xs justify-between`} href={`/projects/${project.slug}`}>{project.name} <div>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</div></a>
      </div>
    )
  ))
}

const Projects: NextPage = () => {
  const title = 'Projects'
  const [showRisky, setShowRisky] = useState(false)
  const [showRugged, setShowRugged] = useState(false)

  const content = (
    <>
      <p className='text-xs'>The projects here are just those we have done some research into, the content herein does not constitute financial advice</p>
      <p className='text-xs'>Please do your own research before investing, we can take no responsibility for the performance of any investments you make.</p>
      <p className='text-xs'>Ratings are of course mostly subjective, your opinion may differ.</p>
      <h2 className='text-lg my-4 text-green dark:text-green-darkmode'>Highly Rated Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
        {
          projectCardList(projects.bluechip)
        }
      </div>
      <h2 className='my-4 text-lg text-blue dark:text-blue-darkmode'>Average Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
        {
          projectCardList(projects.average)
        }
      </div>
      <h2 className='my-4 text-lg text-orange dark:text-orange-darkmode'>Risky Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-4'>
        {
          projectSimpleCardList(projects.risky, 'warn')
        }
      </div>
      <h2 className='my-4 text-lg text-red dark:text-red-darkmode'>Rug Pulled Projects</h2>
      <div className='grid gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-4'>
        {
          projectSimpleCardList(projects.rugpulled, 'danger')
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
