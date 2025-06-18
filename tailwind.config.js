/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary': 'rgb(48, 79, 150)',
        'secondary':'#6074a6',
      }
    },
    fontFamily:{
      'hero-font': ['Sriracha', 'cursive'],
    }
  },
  plugins: [],
}

