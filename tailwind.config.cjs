/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.tsx',
  './index.html'
],
  theme: {
    extend: {
      colors:{
        background:"#FBFCFF",
        light_blue:"#E0ECFF",
        grey: "#4D5E77"
      },
      
      textColor: {
        black_blue: "#0d114f"
      },

      borderWidth:{
        1: '1px',
      },

      width: {
        default: "1160px",

      },
     
    },
  },
  plugins: [],
}