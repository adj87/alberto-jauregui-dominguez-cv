/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  /*   safelist: [
    {
      pattern: /./
    }
  ], */
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: colors.white,
        gray: colors.gray,
        "main-bg": "#000825"
      },
      spacing: {
        22: "3rem",
        34: "6rem",
        46: "9rem",
        58: "12rem",
        60: "15rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        156: "39rem",
        168: "42rem",
        180: "45rem",
        192: "48rem",
        204: "51rem"
      }
    }
  },
  plugins: []
};
