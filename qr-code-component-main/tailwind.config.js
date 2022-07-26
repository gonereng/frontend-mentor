/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        pwLightGray: 'hsl(212, 45%, 89%)',
        pwGrayishBlue: 'hsl(220, 15%, 55%)',
        pwDarkBlue: 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
};
