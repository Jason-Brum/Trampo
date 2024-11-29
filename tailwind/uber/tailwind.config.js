/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'uber': "url('/src/imagens/bguber.png')",
        'city': "url('/src/imagens/bg-city.png')",
      }
    },
  },
  plugins: [],
}

