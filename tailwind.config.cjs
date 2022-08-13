/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx, react}"],
  theme: {
    screens: {

      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
      '2xl': '1320px'
    },
    

    extend: {
      colors: {
        pink: "#FA5C6D",
        darkBlue: "#1A1E49",
        lightBlue: "#1E2356",
        white: "#FFFFFF",
        "light-white": "rgba(255, 255, 255, 0.8)",
        "border-white": "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        hat: ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        bgHero: "url('/src/assets/background/herobg.png')",
        stepbg: "url('/src/assets/Image/background/bgeffect.png')",
        mix: "linear-gradient(180deg, #FA5C6D 0%, #F9574B 100%)",
        navbg: "url('/src/assets/Image/background/activitybg.png')",
        select: "url('/src/assets/Image/icons/downvector.png')",
      },
      lineHeight: {
        relaxed: "120%",
        loose: "170%",
      },
    },
 
  },
  plugins: [],
};

