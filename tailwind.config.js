/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081251",
        "light-white":"rgba(255,255,255,0.19 )"
      },
      screens: {
        'xsm': '200px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
