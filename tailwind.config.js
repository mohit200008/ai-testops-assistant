/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000FF',
        'primary-light': '#3333FF',
        'primary-dark': '#0000CC'
      }
    },
  },
  plugins: [],
}
