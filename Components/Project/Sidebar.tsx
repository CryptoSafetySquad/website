import ExternalLink from "../ExternalLink"
import type { Project } from "../../types/project";
import Contracts from "./Contracts";
import ModeSwitchingIcon from "../ModeSwitchingIcon";

interface ProjectSidebarProps {
  project: Project;
  children?: any;
}

const Sidebar = ({ project, children }: ProjectSidebarProps) => {
  if (!project) { return null }
  return (
    <aside>
      {project.redflags && (
        <div className='project-card'>
          <div className='card__header danger'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</div>
          <div className='card__content'>
            {project.redflags.map(rf => <p key={rf?.toString()} className='text-xs'>{rf}</p>)}
          </div>
        </div>
      )}
      {project.greenflags && (
        <div className='project-card'>
          <div className='card__header'><ModeSwitchingIcon filename='flag' scheme='white' /> Green Flags</div>
          <div className='card__content'>
            {project.greenflags.map(gf => <p key={gf?.toString()} className='text-xs'>{gf}</p>)}
          </div>
        </div>
      )}
      {project.warnings && (
        <div className='project-card'>
          <div className='card__header warn'><ModeSwitchingIcon filename='warning' scheme='orange' /> Red Flags</div>
          <div className='card__content'>
            {project.warnings}
          </div>
        </div>
      )}
      {project.nfts && <Contracts contracts={project.nfts} title='NFTs' />}
      {project.wallets && <Contracts contracts={project.wallets} title='Wallets' />}
      {project.contracts && <Contracts contracts={project.contracts} title='Contracts' />}
      {project.tokens && <Contracts contracts={project.tokens} title='Tokens' />}
      {children}
      {project.relatedProjects && (
        <div className='project-card'>
          <h2 className='card__header'>Related Projects</h2>
          <div className='card__content'>
            {project.relatedProjects.map(prj => {
              return (
                <p key={prj.link} className='text-xs'>
                  <a href={`/projects/${prj.link}`}>{prj.name}</a>
                  {prj.desc && <> - {prj.desc}</>}
                </p>
              )
            })}
          </div>
        </div>
      )}
      {project.relatedLinks && (
        <div className='project-card'>
        <h2 className='card__header'>Related Links</h2>
        <div className='card__content'>
          {project.relatedLinks.map(l => {
            return (
              <p key={l.link} className='text-xs'>
                <ExternalLink href={l.link} text={l.name} />
                {l.desc && <> - {l.desc}</>}
              </p>
            )
          })}
        </div>
      </div>
      )}
      {project.domains && (
        <div className='project-card'>
          <h2 className='card__header'>Domains</h2>
          <div className='card__content'>
            {project.domains.map(dom => {
              return (
                <p key={dom} className='text-xs'>
                  <ExternalLink href={`https://${dom}`} text={dom} />
                </p>
              )
            })}
          </div>
        </div>
      )}
      {project.team && (
        <div className='project-card'>
          <h2 className='card__header'>Team</h2>
          <div className='card__content'>
            {project.team.map(t => {
              return (
                <p key={t.name} className='text-xs'>
                  {t.name}
                  {t.linkedin && <ExternalLink className="ml-2" href={t.linkedin}><img className='inline-block' width='20' src='/images/icons/brand/linkedin.svg' /></ExternalLink>}
                  {t.twitter && <ExternalLink className="ml-2" href={t.twitter}><img className='inline-block' width='20' src='/images/icons/brand/twitter.svg' /></ExternalLink>}
                </p>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
