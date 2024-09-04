/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF014F",

          secondary: "#1f3a41",

          accent: "#22262A",

          neutral: "#FFFFFF",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#00A96E",

          warning: "#FFBE00",

          error: "#FF5861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
