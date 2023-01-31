/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xl': {'min': '1401px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1400px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
