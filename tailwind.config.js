/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#b49b68',
        blue: {
          DEFAULT: '#126fd1',
          darkmode: '#3e9dff',
        },
        green: {
          DEFAULT: '#009300',
          darkmode: '#29ff29'
        },
        orange: {
          DEFAULT: '#cf8b0d',
          darkmode: '#f1ab2a'
        },
        red: {
          DEFAULT: '#950c0c',
          darkmode: '#f71f1f'
        },
        currency: {
          DEFAULT: '#ececec',
          arb: '#28a0f0',
          avax: '#e84142',
          base: '#0153ff',
          btc: '#FF9500',
          bnb: '#f0b90b',
          canto: '#06fc99',
          ckb: '#18efb1',
          dai: '#fdb736',
          dag: '#fff',
          eth: '#ECEFF0',
          ftm: '#1969ff',
          kda: '#ED098F',
          ltc: '#88cbf5',
          matic: '#9A60FF',
          op: '#ff0420',
          sol: '#19FB9B',
          usdc: '#2775CA',
          usdt: '#009393',
          xmr: '#d26e2b',
        }
      }
    },
  },
  plugins: [],
}
