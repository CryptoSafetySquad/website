import { ReactNode } from "react";

export const ExternalLink = ({ href, text, children, className }: { href: string; text?: string; children?: ReactNode; className?: string; }) => <a href={href} className={className ?? undefined} target='_blank' rel='noopener noreferrer'>{children ?? text ?? href}</a>

export default ExternalLink
