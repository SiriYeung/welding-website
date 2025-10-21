/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00205B',
          red: '#FF0000',
          white: '#FFFFFF',
          gray: '#444444',
        }
      },
      fontFamily: {
        primary: ['Montserrat', 'Gotham', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
