import type { NextPage } from 'next'
import Page from '../Components/Page'
import shortAddress from '../functions/shortAddress'

const CEX = 'Centralised Exchange';
const DEX = 'Decentralised Exchange';

const chains = { btc: '', eth: '', bsc: '', polypos: '', polyzk: '', base: '', arb: '', op: '', sol: '' }

const tokenData = [
  { name: 'wBTC', class: 'text-btc', category: 'Wrapped Token', ...chains, eth: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', bsc: '', polypos: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', polyzk: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1' },
  { name: 'USDT', class: 'text-usdt', category: 'Stablecoin', ...chains, eth: '0xdac17f958d2ee523a2206206994597c13d831ec7', bsc: '0x55d398326f99059fF775485246999027B3197955', polypos: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', polyzk: '0x1e4a5963abfd975d8c9021ce480b42188849d41d', sol: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB' },
  { name: 'USDC', class: 'text-usdc', category: 'Stablecoin', ...chains, eth: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', bsc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', polypos: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', polyzk: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035', sol: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' },
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
    case 'polypos': return <a href={`https://polygonscan.com/token/${address}`}>{shortAddress(address)}</a>
    case 'polyzk': return <a href={`https://zkevm.polygonscan.com/token/${address}`}>{shortAddress(address)}</a>
    case 'bsc': return <a href={`https://bscscan.com/token/${address}`}>{shortAddress(address)}</a>
    case 'eth': return <a href={`https://etherscan.io/token/${address}`}>{shortAddress(address)}</a>
    case 'sol': return <a href={`https://solscan.io/token/${address}`}>{shortAddress(address)}</a>
    case 'op':
    case 'base':
    case 'arb':
    case '':
      return <a onClick={() => { navigator.clipboard.writeText(address) }}>{shortAddress(address)}</a>
  }
}

const Tokens: NextPage = () => {

  const title = 'Tokens'
  const content = (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Token</th>
            <th>Category</th>
            <th>BTC BRC20</th>
            <th>Eth ERC20</th>
            <th>BSC</th>
            <th>Sol</th>
            <th>Poly PoS</th>
            <th>Poly zkEVM</th>
            <th>Arb</th>
            <th>Opt</th>
            <th>Base</th>
            
          </tr>
        </thead>
        <tbody>
          {tokenData.map(token => (
            <tr className={token.class} key={token.name}>
              <td>{token.name}</td>
              <td>{token.category}</td>
              <td>{renderAddress(token.btc, 'btc')}</td>
              <td>{renderAddress(token.eth, 'eth')}</td>
              <td>{renderAddress(token.bsc, 'bsc')}</td>
              <td>{renderAddress(token.sol, 'sol')}</td>
              <td>{renderAddress(token.polypos, 'polypos')}</td>
              <td>{renderAddress(token.polyzk, 'polyzk')}</td>
              <td>{renderAddress(token.arb, 'arb')}</td>
              <td>{renderAddress(token.op, 'op')}</td>
              <td>{renderAddress(token.base, 'base')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='my-4'>Hydro Whale Ecosystem: P79 / OceanMoney / OrcaFi</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Token</th>
            <th>Category</th>
            <th>BTC BRC20</th>
            <th>Eth ERC20</th>
            <th>BSC</th>
            <th>Poly PoS</th>
            <th>Poly zkEVM</th>
            <th>Arb</th>
            <th>Opt</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          {hwTokenData.map(token => (
            <tr className={token.class} key={token.name}>
              <td>{token.name}</td>
              <td>{token.category}</td>
              <td>{renderAddress(token.btc, 'btc')}</td>
              <td>{renderAddress(token.eth, 'eth')}</td>
              <td>{renderAddress(token.bsc, 'bsc')}</td>
              <td>{renderAddress(token.polypos, 'polypos')}</td>
              <td>{renderAddress(token.polyzk, 'polyzk')}</td>
              <td>{renderAddress(token.arb, 'arb')}</td>
              <td>{renderAddress(token.op, 'op')}</td>
              <td>{renderAddress(token.base, 'op')}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
