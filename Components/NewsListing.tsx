import type { NewsEntry } from "../types/NewsEntry"

const NewsListing = ({ newsEntries }: { newsEntries: NewsEntry[] }) => {
  return (
    <table>
      <tbody>
      <>
        {
          newsEntries.map((entry: NewsEntry, index: number) => {
            return <tr key={`news-item-${index}`}>
              <td className='text-xs pr-2 pb-2 align-top'>{entry.date}</td>
              <td className='text-xs pl-2 pb-2'>{entry.content}</td>
            </tr>
          })
        }
      </>
      </tbody>
    </table>
  )
}

export default NewsListing
