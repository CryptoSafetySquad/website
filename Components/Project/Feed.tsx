import { ReactNode } from "react";
import { NewsEntry } from "../../types/NewsEntry";

type FeedEntry = NewsEntry | {
  dateISO: string;
  date: string;
  content: ReactNode;
}

const getMonthName = (m: number) => {
  let ret = 'January'
  switch (m) {
    case 1: ret = 'February'; break;
    case 2: ret = 'March'; break;
    case 3: ret = 'April'; break;
    case 4: ret = 'May'; break;
    case 5: ret = 'June'; break;
    case 6: ret = 'July'; break;
    case 7: ret = 'August'; break;
    case 8: ret = 'September'; break;
    case 9: ret = 'October'; break;
    case 10: ret = 'November'; break;
    case 11: ret = 'December'; break;
  }
  return ret
}

const Feed = ({ entries, className }: { entries: FeedEntry[]; className?: string; }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2'>
      {entries.map((entry, index) => {
        const parsedDate = new Date(entry.dateISO as string);
        const displayDate = `${parsedDate.getDate()} ${getMonthName(parsedDate.getMonth())} ${parsedDate.getFullYear()}`
        return (
          <div key={index} className='project-card bordered'>
            <div className={`card__header text-xs ${className}`}>{displayDate}</div>
            <div className='card__content text-sm'>
              {entry.content}
            </div>
          </div>
        )
        }
      )}
    </div>
  )
}

export default Feed
