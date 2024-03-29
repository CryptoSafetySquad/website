import ExternalLink from "../ExternalLink"
import type { Contract } from "../../types/contract";

interface ProjectContractsProps {
  contracts?: Contract[];
  title: string;
}

const Contracts = ({ contracts, title }: ProjectContractsProps) => {
  if (!contracts) { return null }
  return (
    <div className='project-card'>
      <h2 className='card__header'>{title}</h2>
      <div className='card__content'>
        {contracts.map(contract => {
          return (
            <p key={contract.name} className='text-xs'>
              {contract.name}: <span className='font-mono'>
                <ExternalLink href={contract.explorerUrl} text={contract.short}></ExternalLink>
              </span> {contract.blockchain ? (<><span title={contract.blockchain} className={` text-xs blockchain ${contract.blockchain}`}></span></>) : null}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Contracts
