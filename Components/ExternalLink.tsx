import { ReactNode } from "react";

export const ExternalLink = ({ href, text, children }: { href: string; text?: string; children?: ReactNode }) => <a href={href} target='_blank' rel='noopener noreferrer'>{children ?? text ?? href}</a>

export default ExternalLink
