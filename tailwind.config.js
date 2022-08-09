/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'mobile': '389px'
    // },
    extend: {
      colors: {
        'hb': '#170305',
        'hbmsg': '#D1BEAF'
      }
    },
  },
  plugins: [],
}
