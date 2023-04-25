import type { NextPage } from 'next'
import { useState } from 'react'

import projects from '../data/projects'
import type { Project } from '../types/project'
import styles from '../styles/projects.module.css'
import FullPage from '../Components/FullPage'

const BlochainIcon = ({ blockchain }: { blockchain: string | string[] | undefined; }) => {
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

    if (iconSrc === '') {
      return null
    }
  
    return (
      <img className={`ml-2`} style={{maxHeight: `${height}px`, width: `${width}px`, display: 'inline-block'}} src={iconSrc} width='20' height='20' />
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

const projectCardList = (projects: Project[]) => {
  return projects.map((project) => (
    project.slug && (
      <div className={`card with-img with-bg bordered`} key={project.slug}>
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
            <span className={`text-sm ${styles.tags}`}>{project.type}</span>
            <span className='text-sm'>{project.blockchain && <BlochainIcon blockchain={project.blockchain} />}</span>
          </div>
        </div>
      </div>
    )
  ))
}

const projectSimpleCardList = (projects: Project[], cardClass?: string) => {
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
  const [showFailed, setShowFailed] = useState(false)

  const cardGridClasses = 'grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'

  const content = (
    <>
      <h2 className='text-lg my-4 text-green dark:text-green-darkmode'>Highly Rated Projects</h2>
      <div className={cardGridClasses}>
        {
          projectCardList(projects.bluechip)
        }
      </div>
      <h2 className='my-4 text-lg text-blue dark:text-blue-darkmode'>Average Projects</h2>
      <div className={cardGridClasses}>
        {
          projectCardList(projects.average)
        }
      </div>
      {
        showRisky && (
          <>
            <h2 className='my-4 text-lg text-orange dark:text-orange-darkmode'>Risky Projects</h2>
            <div className={cardGridClasses}>
              {
                projectSimpleCardList(projects.risky, 'warn')
              }
            </div>
          </>
        )
      }
      {
        showFailed && (
          <>
            <h2 className='my-4 text-lg text-red dark:text-red-darkmode'>Failed Projects</h2>
            <div className={cardGridClasses}>
              {
                projectSimpleCardList(projects.failed, 'danger')
              }
            </div>
          </>
        )
      }
      {
        showRugged && (
          <>
            <h2 className='my-4 text-lg text-red dark:text-red-darkmode'>Rug Pulled Projects</h2>
            <div className={cardGridClasses}>
              {
                projectSimpleCardList(projects.rugpulled, 'danger')
              }
            </div>
          </>
        )
      }
      
    </>
  )

  return (
    <FullPage {...{
      title,
      header: <></>,
      content,
      sidebarContent: (
        <div className='project-card'>
          <div className='card__header rounded-lg p-4'>
            <h1 className='mb-4'>Projects</h1>
              <p className='text-xs warn'>The projects here are just those we have done some research into, the content herein does not constitute financial advice</p>
            <p className='text-xs warn'>Please do your own research before investing, we can take no responsibility for the performance of any investments you make.</p>
            <p className='text-xs warn'>Ratings are of course mostly subjective, your opinion may differ.</p>
            <div className=''>
              <div className='mt-4 mb-4'>
                <p className='text-xs'>Include high risk?: <input type='checkbox' defaultChecked={showRisky} onChange={() => {setShowRisky(!showRisky)}} /></p>
              </div>
              <div className='mb-4'>
                <p className='text-xs'>Include failed?: <input type='checkbox' defaultChecked={showFailed} onChange={() => {setShowFailed(!showFailed)}} /></p>
              </div>
              <div>
                <p className='text-xs'>Include rug-pulled?: <input type='checkbox' defaultChecked={showRugged} onChange={() => setShowRugged(!showRugged)} /></p>
              </div>
            </div>
          </div>
        </div>
      ),
      slug: 'research',
      description: 'Research'
    }} />
  )
}

export default Projects
