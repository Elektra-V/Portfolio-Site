/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'body': '#0c4a6e',
        'selected-text': '#A3A3FF',
        'theme': '#d3dce6',
        'nav': '#cbd5e1',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily:{
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  }
  
}
