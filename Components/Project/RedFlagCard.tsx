import { ReactNode } from "react"
import ModeSwitchingIcon from "../ModeSwitchingIcon"

export const RedFlagCard = ({ redflags }: { redflags?: ReactNode[] }) => {
  if (!redflags) { return null }
  return (
    <div className='card'>
      <h2 style={{color: '#f71f1f'}} className='mb-2'><ModeSwitchingIcon filename='flag' scheme='red' /> Red Flags</h2>
      <ul>
        {redflags.map((flag: any, index: number) => <li key={index} className='text-xs mb-2'>&bull; {flag}</li>)}
      </ul>
    </div>
  )
}

export default RedFlagCard
