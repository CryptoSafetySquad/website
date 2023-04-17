import defi from "../defi"

const canto = {
  name: 'Canto',
  slug: 'canto',
  icon: '/images/icons/blockchains/canto.svg',
  metadata: {
    website: 'https://canto.io/',
    token: {
      name: 'CANTO',
      cmc: 'https://coinmarketcap.com/currencies/canto/'
    }
  },
  data: {
    defi: [
      defi.dexVaults,
    ],
  }
}

export default canto
