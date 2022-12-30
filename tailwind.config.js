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
          darkmode: '#3e9dff'
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
      }
    },
  },
  plugins: [],
}
