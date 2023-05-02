import type { EcosystemLink } from "./EcosystemLink";
import type { Project } from "./project";
import type { NewsEntry } from "./NewsEntry";
import type { YouTubeVideo } from "./YouTubeVideo";

export type BlockchainData = {
  name: string;
  slug?: string;
  icon?: string | {
    default: string;
    darkMode: string;
  };
  iconSize?: {
    w: number;
    h: number;
  },
  iconRatio?: {
    x: number;
    y: number;
  }
  metadata?: {
    website?: string;
    token?: {
      name: string;
      cmc?: string;
    }
  }
  data?: {
    explorers?: EcosystemLink[] | undefined;
    wallets?: EcosystemLink[] | undefined;
    defi?: EcosystemLink[] | undefined;
    centralisedExchanges?: EcosystemLink[] | undefined;
    decentralisedExchanges?: EcosystemLink[] | undefined;
    nftMarketplaces?: EcosystemLink[] | undefined;
    protocols?: EcosystemLink[] | undefined;
    riskyProjects?: EcosystemLink[] | undefined;
    nftProjects?: Project[];
    [key: string]: EcosystemLink[] | Project[] | undefined;
  },
  officialVideos?: YouTubeVideo[];
  communityVideos?: YouTubeVideo[];
  news?: NewsEntry[];
  [key: string]: string | object | undefined;
}
