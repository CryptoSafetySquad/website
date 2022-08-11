import type { NextPage } from 'next'
import Page from '../Components/Page'
import PrivateSniper from '../data/authors/PrivateSniper'
import { overview as hwmc } from './research/hydro-whales'
import { overview as omni } from './research/omnibirds'

const scoreGreen = '🟩'
const scoreYellow = '🟨'
const scoreRed = '🟥'

const results = [
  // H
  hwmc, // Hydro Whales
  // O
  omni,
]

const Research: NextPage = () => {
  const title = 'Research'
  const content = (
    <div className='grid grid-cols-2 gap-4'>
      {
        results.map(item => 
          <div className='card p-2' key={item.slug}>
            <a className='text-lg' href={`/research/${item.slug}`}>{item.project}</a>
            <div className='text-sm'>
              <span>Researcher: </span>
              <span>{item.researcher.nickname}</span>
            </div>
            <div>
              <table className='table centre cells-centred'>
                <tr>
                  <td>Good</td>
                  <td>Bad</td>
                  <td>Score</td>
                </tr>
                <tr>
                  <td>{item.points.good}</td>
                  <td>{item.points.bad}</td>
                  <td>{item.score > 8 ? scoreGreen : item.score > 4 ? scoreYellow : scoreRed } {item.score}</td>
                </tr>
              </table>
            </div>  
          </div>
        )
      }
    </div>
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

export default Research
