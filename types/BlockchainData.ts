import type { EcosystemLink } from "./EcosystemLink";

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
    [key: string]: EcosystemLink[] | undefined;
  }
  [key: string]: string | object | undefined;
}
