/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        pwOrange: 'hsl(25, 97%, 53%)',
        pwLightGray: 'hsl(217, 12%, 63%)',
        pwMediumGray: 'hsl(216, 12%, 54%)',
        pwDarkBlue: 'hsl(213, 19%, 18%)',
        pwVeryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
