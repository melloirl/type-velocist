/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "racer-yellow": {
          DEFAULT: "#F5BB42", // Original color
          light: "#F8CC70", // Lighter shade
          dark: "#D1A136", // Darker shade
        },
      },
    },
  },
  plugins: [],
};
