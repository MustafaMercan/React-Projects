/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbarColor:"rgba(244,242,237,255)",
        buttonColor:"rgba(159,158,137,255)",
        footerColor:"rgba(233,242,232,255)",
        navBorderColor:"#CFCEB3",
        contactColorV1:"#e7eae7"
      },
      fontFamily:{
        mainTextFont: "'Roboto', sans-serif",
        secondryTitleFont :"'EB Garamond', serif",
        titleTextFont:"'Parisienne', cursive;"
      },
      height:{
        'screen/1.5':'75vh',
        'screen/2':'50vh',
      },
      rotate:{
        '10':'10deg',
        '-10':'-10deg'
      },
      width:{
        'screen/3':'30vw'
      }
    },
  },
  plugins: [],
}