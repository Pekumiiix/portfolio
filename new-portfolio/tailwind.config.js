const { apply } = require('function-bind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'myBlack': "#14191F",
        'myWhite': "#DCE4FE",
        'myPurple': "#2E313F",
        'myBrown': "#443A04",
        'myBlue': "#390877",
        'myGreen': "#113A05",
        'darkGreen': "#38ff00"
      },
      backgroundImage: {
        'container': "url('img/second.svg')"
      }
    },
  },
  plugins: [],
}

