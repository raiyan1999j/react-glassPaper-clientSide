/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'footerImg':"url(https://i.postimg.cc/htyLG5Gm/cool-background.png)"
      },
      screens:{
        'mobileS':{'min':'0px','max':'320px'},
        'mobileM':{'min':'320px','max':'375px'}
      }
    },
  },
  plugins: [require("daisyui")],
}

