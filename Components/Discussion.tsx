import { DiscussionEmbed } from 'disqus-react';

interface DiscussionProps {
  title: string;
  slug: string;
}

const Discussion = ({ title, slug, }: DiscussionProps) => {
  return (
    <DiscussionEmbed
      shortname='cryptosafetysquad'
      config={
        {
          url: slug,
          identifier: slug,
          title: title
        }
      }
    />
  )
}

export default Discussion
