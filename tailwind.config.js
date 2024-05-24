/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/gerile2.png')",
        banner2: "url('/public/gerile-Recovered.png')",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        bgBodyColor: "#F8F8F8",
        lightText: "#c4cfde",
        lightText2: "#202224",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
        designColor2: "#0397FF",
      },

      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "10px 10px 19px #F8F8F8, -10px -10px 19px #F9F8F8",
      },
      "hero-pattern":
        "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
    },
  },
  plugins: [],
};
