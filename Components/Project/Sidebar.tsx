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
            {project.redflags}
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
                <span key={prj.link} className='text-xs'>
                  <a href={`/projects/${prj.link}`}>{prj.name}</a>
                  {prj.desc && <> - {prj.desc}</>}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
