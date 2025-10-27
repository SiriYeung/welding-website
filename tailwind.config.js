/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00205B',
        'brand-red': '#FF0000',
        'brand-grey': '#444444',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
