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
          btc: '#FF9500',
          bnb: '#f0b90b',
          eth: '#ECEFF0',
          ckb: '#18efb1',
          canto: '#06fc99',
          dag: '#1552EF',
          ltc: '#88cbf5',
          ftm: '#1969ff',
          kda: '#ED098F',
          matic: '#9A60FF',
          op: '#ff0420',
          sol: '#19FB9B',
          usdc: '#2775CA',
          xmr: '#d26e2b',
        }
      }
    },
  },
  plugins: [],
}
