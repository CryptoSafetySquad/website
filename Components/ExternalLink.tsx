export const ExternalLink = ({ href, text }: { href: string; text?: string; }) => <a href={href} target='_blank' rel='noopener noreferrer'>{text ?? href}</a>

export default ExternalLink
