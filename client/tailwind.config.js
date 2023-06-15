/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      smd:"700px",
      md: "768px",
      mdg: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors:{
        'primary-green':'#52AF1F'
      },
      
    },
  },
  plugins: [],
}

