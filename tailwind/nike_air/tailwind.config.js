/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "tenis": "url('/src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

