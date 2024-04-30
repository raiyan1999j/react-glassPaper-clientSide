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
        'smallest':{'min':'0px','max':'576px'},
        'small':{'min':'577px','max':'768px'},
        'medium':{'min':'769px','max':'992px'},
        'large':{'min':'993px','max':'1200px'},
      }
    },
  },
  plugins: [require("daisyui")],
}

