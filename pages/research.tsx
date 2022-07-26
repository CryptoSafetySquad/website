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
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Project</th>
            <th>Researched By</th>
            <th>Good Points</th>
            <th>Red Flags?</th>
            <th>Researchers Score</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map(item => <tr key={item.project}>
                <td><a href={`/research/${item.slug}`}>{item.project}</a></td>
                <td className='center'>{item.researcher.nickname}</td>
                <td className='center'>{item.points.good}</td>
                <td className='center'>{item.points.bad}</td>
                <td className='center'>{item.score > 8 ? scoreGreen : item.score > 4 ? scoreYellow : scoreRed } {item.score}</td>
              </tr>
            )
          }
        </tbody>
      </table>
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

export default Research
