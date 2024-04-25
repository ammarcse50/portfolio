/** @type {import('tailwindcss').Config} */
export default {

  daisyui: {
    themes: ["light", "dark", "cupcake","synthwave"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
           
      fontFamily:{
        
        signature :["Great Vibes"],

      

    },
  },
  plugins: [require("daisyui")],
}

