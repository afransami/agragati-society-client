/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Balooda: ['Baloo Da 2', 'cursive'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
      Poppin: ['Poppins', 'sans-serif'],
      // Add more font families if needed
    },
  },
  plugins: [require("daisyui")],
}

