export type EarningsEntry = {
  label: string;
  date: string;
  amount?: number;
  notes?: string;
  bitcoin?: {
    btc: number;
  },
  bsc?: {
    usdc?: number;
    usdt?: number;
    bnb?: number;
  }
  kadena?: {
    kda?: number;
  },
  polygon?: {
    weth?: number;
    wbtc?: number;
    usdc?: number;
    usdt?: number;
    matic?: number;
  };
  ethereum?: {
    usdc?: number;
    wbtc?: number;
    usdt?: number;
    eth?: number;
  };
  litecoin?: {
    ltc?: number;
  }
  nervos?: {
    usdc?: number;
    usdt?: number;
    ckb?: number; // Nervos
  }
  [key: string]: string | number | undefined | { [key: string]: number | undefined };
}
