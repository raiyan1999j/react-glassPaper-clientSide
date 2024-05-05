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
        'mobileM':{'min':'321px','max':'375px'},
        'mobileL':{'min':'376px','max':'425px'},
        'tablet': {'min':'426px','max':'768px'},
        'laptop': {'min':'769px','max':'1024px'}
      }
    },
  },
  plugins: [require("daisyui")],
}

