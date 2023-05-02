import { BlockchainData } from "../../types/BlockchainData"
import { NewsEntry } from "../../types/NewsEntry"
import type { YouTubeVideo } from "../../types/YouTubeVideo"

function parseVideo(video: YouTubeVideo) {
  return {
    date: video.date,
    dateISO: video.dateISO,
    type: 'video',
    content: (
      <div key={video.youtubeSlug}>
        <iframe className='mb-2' width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {video.title}
      </div>
    )
  }
}

export const buildFeed = (ecosystem: BlockchainData) => {
  const feedItems: any[] = []
  if (ecosystem.news) {
    ecosystem.news.map((newsItem: NewsEntry) => feedItems.push({...newsItem, type: 'news'}))
  }
  if (ecosystem.officialVideos) {
    ecosystem.officialVideos.map(video => (
      feedItems.push(parseVideo(video))
    ))
  }
  if (ecosystem.communityVideos) {
    ecosystem.communityVideos.map(video => (
      feedItems.push(parseVideo(video))
    ))
  }
  feedItems.sort((a,b) => {
    return (new Date(a.dateISO).getTime()) - (new Date(b.dateISO).getTime());
  }).reverse()
  return feedItems
}
