/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
