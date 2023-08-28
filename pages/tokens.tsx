import type { NextPage } from 'next'
import Page from '../Components/Page'
import shortAddress from '../functions/shortAddress'

const CEX = 'Centralised Exchange';
const DEX = 'Decentralised Exchange';

const chains = { btc: '', eth: '', bsc: '', polypos: '', polyzk: '', base: '', arb: '', op: '', sol: '' }

const wbtc = {
  name: 'wBTC', class: 'text-btc', category: 'Wrapped Token', ...chains,
  eth: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  bsc: '',
  polypos: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  polyzk: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
  op: '0x68f180fcce6836688e9084f035309e29bf0a2095',
  arb: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f'
}

const usdt = {
  name: 'USDT', class: 'text-usdt', category: 'Stablecoin', ...chains,
  eth: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  bsc: '0x55d398326f99059fF775485246999027B3197955',
  polypos: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  polyzk: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
  sol: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  op: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
  arb: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
}

const usdc = {
  name: 'USDC', class: 'text-usdc', category: 'Stablecoin', ...chains,
  eth: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  bsc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  polypos: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  polyzk: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
  sol: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  op: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  arb: '0xaf88d065e77c8cc2239327c5edb3a432268e5831'
}

const dai = {
  name: 'DAI', class: 'text-dai', category: 'Stablecoin', ...chains,
  op: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  sol: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
  arb: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
}

const tokenData = [
  wbtc,
  usdt,
  usdc,
  dai
]

const hwTokenData = [
  { name: 'ORCA', class: '', category: DEX, ...chains },
  { name: 'WAVE', class: '', category: CEX, ...chains },
]

const renderAddress = (address: string, chain: string = '') => {
  if (!address) return '';
  if (chain == '') {
    
  }
  switch (chain) {
    case 'btc': break;
    case 'polypos': return <a href={`https://polygonscan.com/token/${address}`}>{address}</a>
    case 'polyzk': return <a href={`https://zkevm.polygonscan.com/token/${address}`}>{address}</a>
    case 'bsc': return <a href={`https://bscscan.com/token/${address}`}>{address}</a>
    case 'eth': return <a href={`https://etherscan.io/token/${address}`}>{address}</a>
    case 'sol': return <a href={`https://solscan.io/token/${address}`}>{address}</a>
    case 'op': return <a href={`https://optimistic.etherscan.io/token/${address}`}>{address}</a>
    case 'base':
    case 'arb':
    case '':
      return <a onClick={() => { navigator.clipboard.writeText(address) }}>{address}</a>
  }
}

const Tokens: NextPage = () => {

  const title = 'Tokens'
  const content = (
    <>
      {tokenData.map(token => (
        <div className='card'>
          <table key={token.name}>
            <thead>
              <tr className={token.class}>
                <td className='text-xl'>{token.name}</td>
                <td>{token.category}</td>
              </tr>
            </thead>
            <tbody>
              <tr><td className='text-btc'>Bitcoin (BRC20)</td><td>{renderAddress(token.btc, 'btc')}</td></tr>
              <tr><td className='text-eth'>Ethereum (ERC20)</td><td>{renderAddress(token.eth, 'eth')}</td></tr>
              <tr><td className='text-bnb'>Binance Smart Chain</td><td>{renderAddress(token.bsc, 'bsc')}</td></tr>
              <tr><td className='text-sol'>Solana</td><td>{renderAddress(token.sol, 'sol')}</td></tr>
              <tr><td className='text-matic'>Polygon PoS</td><td>{renderAddress(token.polypos, 'polypos')}</td></tr>
              <tr><td className='text-matic'>Polygon zkEVM</td><td>{renderAddress(token.polyzk, 'polyzk')}</td></tr>
              <tr><td className='text-arb'>Arbitrum</td><td>{renderAddress(token.arb, 'arb')}</td></tr>
              <tr><td className='text-op'>Optimism</td><td>{renderAddress(token.op, 'op')}</td></tr>
              <tr><td className='text-base'>Base</td><td>{renderAddress(token.base, 'base')}</td></tr>
            </tbody>
          </table>
        </div>
      ))}

      <h2 className='my-4 text-lg'>Hydro Whale Ecosystem: P79 / OceanMoney / OrcaFi</h2>
      {hwTokenData.map(token => (
        <div className='card'>
          <table key={token.name}>
            <thead>
              <tr className={token.class}>
                <td className='text-xl'>{token.name}</td>
                <td>{token.category}</td>
              </tr>
            </thead>
            <tbody>
              <tr><td className='text-btc'>Bitcoin (BRC20)</td><td>{renderAddress(token.btc, 'btc')}</td></tr>
              <tr><td className='text-eth'>Ethereum (ERC20)</td><td>{renderAddress(token.eth, 'eth')}</td></tr>
              <tr><td className='text-bnb'>Binance Smart Chain</td><td>{renderAddress(token.bsc, 'bsc')}</td></tr>
              <tr><td className='text-sol'>Solana</td><td>{renderAddress(token.sol, 'sol')}</td></tr>
              <tr><td className='text-matic'>Polygon PoS</td><td>{renderAddress(token.polypos, 'polypos')}</td></tr>
              <tr><td className='text-matic'>Polygon zkEVM</td><td>{renderAddress(token.polyzk, 'polyzk')}</td></tr>
              <tr><td className='text-arb'>Arbitrum</td><td>{renderAddress(token.arb, 'arb')}</td></tr>
              <tr><td className='text-op'>Optimism</td><td>{renderAddress(token.op, 'op')}</td></tr>
              <tr><td className='text-base'>Base</td><td>{renderAddress(token.base, 'base')}</td></tr>
            </tbody>
          </table>
        </div>
      ))}
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
