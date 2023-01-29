import ExternalLink from "../ExternalLink"
import type { Project } from "../../data/projects";
import Contracts from "./Contracts";

interface ProjectSidebarProps {
  project: Project;
  children?: any;
}

const Sidebar = ({ project, children }: ProjectSidebarProps) => {
  if (!project) { return null }
  return (
    <aside>
      {children}
      {project.nfts && <Contracts contracts={project.nfts} title='NFTs' />}
      {project.wallets && <Contracts contracts={project.wallets} title='Wallets' />}
      {project.contracts && <Contracts contracts={project.contracts} title='Contracts' />}
      {project.tokens && <Contracts contracts={project.tokens} title='Tokens' />}
    </aside>
  )
}

export default Sidebar
