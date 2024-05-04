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
        'mobileM':{'min':'320px','max':'375px'},
        'mobileL':{'min':'325px','max':'425px'},
        'tablet': {'min':'425px','max':'768px'},
        'laptop': {'min':'768px','max':'1024px'}
      }
    },
  },
  plugins: [require("daisyui")],
}

