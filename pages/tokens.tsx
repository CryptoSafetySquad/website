import type { NextPage } from 'next'
import Page from '../Components/Page'
import shortAddress from '../functions/shortAddress';

const CEX = 'Centralised Exchange';
const DEX = 'Decentralised Exchange';
const STABLE = 'Stablecoin (Centralised)';
const DSTABLE = 'Stablecoin (Decentralised)';
const WRAPPED = 'Wrapped Token'; 
const COMMODITY = 'Commodity';
const P79 = 'Project 79';

const chains = { btc: '', eth: '', bsc: '', polypos: '', polyzk: '', base: '', arb: '', op: '', sol: '' }

const wbtc = {
  name: 'wBTC', class: 'text-btc', category: WRAPPED, ...chains,
  eth: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  bsc: '',
  polypos: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  polyzk: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
  op: '0x68f180fcce6836688e9084f035309e29bf0a2095',
  arb: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f'
}

const usdt = {
  name: 'USDT', class: 'text-usdt', category: STABLE, ...chains,
  eth: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  bsc: '0x55d398326f99059fF775485246999027B3197955',
  polypos: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  polyzk: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
  sol: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  op: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
  arb: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
}

const usdc = {
  name: 'USDC', class: 'text-usdc', category: STABLE, ...chains,
  eth: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  bsc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  polypos: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  polyzk: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
  sol: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  op: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  arb: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
  base: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca', // Caveat USDbC, see https://help.coinbase.com/en/coinbase/getting-started/crypto-education/usd-base-coin
}

const dai = {
  name: 'DAI', class: 'text-dai', category: DSTABLE, ...chains,
  op: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  sol: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
  arb: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  base: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb'
}

const paxg = {
  name: 'PAXG', class: '', category: COMMODITY, ...chains,
  cmc: 'https://coinmarketcap.com/currencies/pax-gold/',
  website: 'https://paxos.com/paxgold/',
  eth: '0x45804880de22913dafe09f4980848ece6ecbaf78',

const uni = {
  name: 'UNI', class: 'text-uni', category: 'Governance Token', ...chains,
  eth: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  op: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
  sol: '',
  arb: '',
  base: ''
}

const tokenData = [
  wbtc,
  usdt,
  usdc,
  dai,
  paxg,
]

const exchangeTokens = [
  uni,
]

const hwTokenData = [
  { name: 'ORCA', class: '', category: DEX, ...chains },
  { name: 'WAVE', class: '', category: CEX, ...chains },
  { name: 'BURL', class: '', category: P79, ...chains, polypos: '0xf771d937c8c1772d1070ae83bca5bc7525b7c71d' },
]

const renderAddress = (address: string, chain: string = '') => {
  if (!address) return '';
  if (chain == '') {
    
  }
  const addressString: string = shortAddress(address)

  switch (chain) {
    case 'btc': break;
    case 'polypos': return <a target='_blank' rel='noopener noreferrer' href={`https://polygonscan.com/token/${address}`}>{addressString}</a>
    case 'polyzk': return <a target='_blank' rel='noopener noreferrer' href={`https://zkevm.polygonscan.com/token/${address}`}>{addressString}</a>
    case 'bsc': return <a target='_blank' rel='noopener noreferrer' href={`https://bscscan.com/token/${address}`}>{addressString}</a>
    case 'eth': return <a target='_blank' rel='noopener noreferrer' href={`https://etherscan.io/token/${address}`}>{addressString}</a>
    case 'sol': return <a target='_blank' rel='noopener noreferrer' href={`https://solscan.io/token/${address}`}>{addressString}</a>
    case 'op': return <a target='_blank' rel='noopener noreferrer' href={`https://optimistic.etherscan.io/token/${address}`}>{addressString}</a>
    case 'base': return <a target='_blank' rel='noopener noreferrer' href={`https://basescan.org/token/${address}`}>{addressString}</a>
    case 'arb':
    case '':
      return <a onClick={() => { navigator.clipboard.writeText(address) }}>{addressString}</a>
  }
}

const renderTokenCard = (token: any) => (
  <div className='card' key={token.name}>
    <div className={`flex justify-between flex-row ${token.class}`}>
      <span className='text-xl'>{token.name}</span>
      {token.category}
    </div>
    <table className='table is-striped'>
      <tbody>
        {token.btc && <tr><td className='text-btc'>Bitcoin (BRC20)</td><td>{renderAddress(token.btc, 'btc')}</td></tr>}
        {token.eth && <tr><td className='text-eth'>Ethereum (ERC20)</td><td>{renderAddress(token.eth, 'eth')}</td></tr>}
        {token.bsc && <tr><td className='text-bnb'>Binance Smart Chain</td><td>{renderAddress(token.bsc, 'bsc')}</td></tr>}
        {token.sol && <tr><td className='text-sol'>Solana</td><td>{renderAddress(token.sol, 'sol')}</td></tr>}
        {token.polypos && <tr><td className='text-matic'>Polygon PoS</td><td>{renderAddress(token.polypos, 'polypos')}</td></tr>}
        {token.polyzk && <tr><td className='text-matic'>Polygon zkEVM</td><td>{renderAddress(token.polyzk, 'polyzk')}</td></tr>}
        {token.arb && <tr><td className='text-arb'>Arbitrum</td><td>{renderAddress(token.arb, 'arb')}</td></tr>}
        {token.op && <tr><td className='text-op'>Optimism</td><td>{renderAddress(token.op, 'op')}</td></tr>}
        {token.base && <tr><td className='text-base'>Base</td><td>{renderAddress(token.base, 'base')}</td></tr>}
      </tbody>
    </table>
  </div>
)

const Tokens: NextPage = () => {

  const title = 'Tokens'
  const content = (
    <>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {tokenData.map(token => renderTokenCard(token))}
      </div>
      <h2 className='my-4 text-lg'>Exchange Tokens</h2>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {exchangeTokens.map(token => renderTokenCard(token))}
      </div>
      <h2 className='my-4 text-lg'>Hydro Whale Ecosystem: P79 / OceanMoney / OrcaFi</h2>
      <p>Coming Soon</p>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {hwTokenData.map(token => renderTokenCard(token))}
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      slug: 'tokens',
      content,
      description: 'Tokens',
    }} />
  )
}

export default Tokens
