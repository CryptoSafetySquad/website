import type { NextPage } from 'next'
import Page from '../Components/Page'
import shortAddress from '../functions/shortAddress'

const CEX = 'Centralised Exchange';
const DEX = 'Decentralised Exchange';

const tokenData = [
  { name: 'wBTC', class: 'text-btc', category: 'Wrapped Token', btc: '', eth: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', bsc: '', polypos: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', polyzk: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1' },
  { name: 'USDT', class: 'text-usdt', category: 'Stablecoin', btc: '', eth: '', bsc: '0x55d398326f99059fF775485246999027B3197955', polypos: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', polyzk: '0x1e4a5963abfd975d8c9021ce480b42188849d41d' },
  { name: 'USDC', class: 'text-usdc', category: 'Stablecoin', btc: '', eth: '', bsc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', polypos: '', polyzk: '' },
]

const hwTokenData = [
  { name: 'ORCA', class: '', category: DEX, eth: '', btc: '', bsc: '', polypos: '', polyzk: '' },
  { name: 'WAVE', class: '', category: CEX, eth: '', btc: '', bsc: '', polypos: '', polyzk: '' },
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
    case 'op':
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
            
            <th>Poly PoS</th>
            <th>Poly zkEVM</th>
            <th>Arb</th>
            <th>Opt</th>
            <th></th>
            <th></th>
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
              <td>{renderAddress(token.polypos, 'polypos')}</td>
              <td>{renderAddress(token.polyzk, 'polyzk')}</td>
              <td>{renderAddress(token.arb, 'arb')}</td>
              <td>{renderAddress(token.op, 'op')}</td>
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
            <th></th>
            <th></th>
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
