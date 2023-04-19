import { ReactNode } from "react";
import { NewsEntry } from "../../types/NewsEntry";

type FeedEntry = NewsEntry | {
  dateISO: string;
  date: string;
  content: ReactNode;
}

const Feed = ({ entries }: { entries: FeedEntry[] }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2'>
      {entries.map((entry, index) => 
        <div key={index} className='project-card bordered'>
          <div className='card__header text-xs'>{entry.date}</div>
          <div className='card__content text-sm'>
            {entry.content}
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed
