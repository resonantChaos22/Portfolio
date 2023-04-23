/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "380px" },
        s: { max: "450px" },
        "2xl": { min: "1700px" },
      },
      fontFamily: {
        tiltwarp: ["Tilt Warp", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
