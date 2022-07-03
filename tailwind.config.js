/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: colors.gray
      },
      spacing: {
        58: "12rem",
        60: "15rem",
        72: "18rem",
        84: "21rem",
        96: "24rem"
      }
    }
  },
  plugins: []
};
