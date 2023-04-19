import { NewsEntry } from "../../types/NewsEntry"
import type { Project } from "../../types/project"
import type { YouTubeVideo } from "../../types/youtubeVideo"

function parseVideo(video: YouTubeVideo) {
  return {
    date: video.date,
    dateISO: video.dateISO,
    content: (
      <div key={video.youtubeSlug}>
        <iframe className='mb-2' width='100%' height='200' src={`https://www.youtube.com/embed/${video.youtubeSlug}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {video.title}
      </div>
    )
  }
}

export const buildFeed = (project: Project) => {
  const feedItems: any[] = []
  if (project.news) {
    project.news.map((newsItem: NewsEntry) => feedItems.push(newsItem))
  }
  if (project.officialVideos) {
    project.officialVideos.map(video => (
      feedItems.push(parseVideo(video))
    ))
  }
  if (project.communityVideos) {
    project.communityVideos.map(video => (
      feedItems.push(parseVideo(video))
    ))
  }
  feedItems.sort((a,b) => {
    return (new Date(a.dateISO).getTime()) - (new Date(b.dateISO).getTime());
  }).reverse()
  return feedItems
}
