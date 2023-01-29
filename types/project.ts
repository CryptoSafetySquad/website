import type { Contract } from "./contract";
import { Blockchains } from "../enums/blockchains";
import type { YouTubeVideo } from "./youtubeVideo";
import ProjectStatus from "../enums/ProjectStatus";
import { ReactNode } from "react";

export interface Project {
  bannerImage?: string;
  slug?: string;
  type: string;
  blockchain?: Blockchains | Blockchains[] | string;
  name: string;
  status?: ProjectStatus;
  opensea?: string;
  twitter?: string;
  website?: string;
  earnings?: any;
  answers?: any;
  research?: any;
  domains?: string[];
  videos?: any;
  news?: any;
  redflags?: ReactNode[];
  greenflags?: ReactNode[];
  officialVideos?: YouTubeVideo[];
  communityVideos?: YouTubeVideo[];
  wallets?: Contract[];
  contracts?: Contract[];
  tokens?: Contract[];
  nfts?: Contract[];
  data?: any; // Placeholder for any other project specific data.
}
