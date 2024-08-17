/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    shadows: {
      "hblack":'rgba(0,0,0,,0)'
    }
  },
  plugins: [require("daisyui")],
};
