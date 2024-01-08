/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cbg': '#d1cb52',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}