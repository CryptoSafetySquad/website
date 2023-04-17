import type { NewsEntry } from "../types/NewsEntry"

const parseDate = (date: string) => {
  let m = parseInt(date.substring(3, 5))
  let y = parseInt(date.substring(6))
  let monthName = ''
  switch(m) {
    case 1: monthName = 'January'; break;
    case 2: monthName = 'February'; break;
    case 3: monthName = 'March'; break;
    case 4: monthName = 'April'; break;
    case 5: monthName = 'May'; break;
    case 6: monthName = 'June'; break;
    case 7: monthName = 'July'; break;
    case 8: monthName = 'August'; break;
    case 9: monthName = 'September'; break;
    case 10: monthName = 'October'; break;
    case 11: monthName = 'November'; break;
    case 12: monthName = 'December'; break;
  }
  return {
    month: m,
    monthName,
    year: y
  }
}

const NewsListing = ({ newsEntries }: { newsEntries: NewsEntry[] }) => {
  let currentDate = ''
  return (
    <table>
      <tbody>
      <>
        {
          newsEntries.map((entry: NewsEntry, index: number) => {
            let date = parseDate(entry.date)
            let showHeading = false
            if (currentDate !== `${date.monthName} ${date.year}`) { 
              console.log(currentDate)
              currentDate = `${date.monthName} ${date.year}`
              return (
                <>
                  <tr className='text-xs' key={`news-item-${index}-month-name`}><td className='py-2' colSpan={2}>{currentDate}</td></tr>
                  <tr key={`news-item-${index}`}>
                    <td className='text-xs pr-2 pb-2 align-top'>{entry.date}</td>
                    <td className='text-xs pl-2 pb-2'>{entry.content}</td>
                  </tr>
                </>
              )
            }
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
