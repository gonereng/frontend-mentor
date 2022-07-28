/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        pwVeryDarkBlue: 'hsl(233, 47%, 7%)',
        pwDarkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        pwSoftViolet: 'hsl(277, 64%, 61%)',
        pwSlightlyTransparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        pwSlightlyMoreTransparentWhite: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['"Lexend Deca"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image-mobile': "url('../images/image-header-mobile.jpg')",
        'hero-image-desktop': "url('../images/image-header-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
