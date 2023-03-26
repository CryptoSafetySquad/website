export type EarningsEntry = {
  label: string;
  date: string;
  amount?: number;
  notes?: string;
  matic?: number;
  eth?: number;
  kda?: number;
  ltc?: number;
  bnb?: number;
  ckb?: number; // Nervos
  bsc?: {
    usdc?: number;
    usdt?: number;
  }
  polygon?: {
    weth?: number;
    wbtc?: number;
    usdc?: number;
    usdt?: number;
  };
  ethereum?: {
    usdc?: number;
    wbtc?: number;
    usdt?: number;
  };
  nervos?: {
    usdc?: number;
    usdt?: number;
  }
}
