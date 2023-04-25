import type { Contract } from "./contract";
import { Blockchains } from "../enums/blockchains";
import type { YouTubeVideo } from "./youtubeVideo";
import ProjectStatus from "../enums/ProjectStatus";
import { ReactNode } from "react";
import type { EcosystemLink } from "./EcosystemLink";

type RelatedProject = {
  name: string;
  link: string;
  desc?: string;
}

export interface Project {
  bannerImage?: string;
  slug?: string;
  type: string;
  description?: string | ReactNode | undefined;
  blockchain?: Blockchains | Blockchains[] | string;
  name: string;
  status?: ProjectStatus;
  opensea?: string | string[];
  twitter?: string;
  website?: string;
  earnings?: any;
  answers?: any;
  research?: any;
  domains?: string[];
  videos?: any;
  textClass?: string;
  news?: any;
  redflags?: ReactNode[];
  warnings?: ReactNode[];
  greenflags?: ReactNode[];
  officialVideos?: YouTubeVideo[];
  communityVideos?: YouTubeVideo[];
  wallets?: Contract[];
  contracts?: Contract[];
  tokens?: Contract[];
  nfts?: Contract[];
  relatedProjects?: RelatedProject[];
  data?: any; // Placeholder for any other project specific data.
}
