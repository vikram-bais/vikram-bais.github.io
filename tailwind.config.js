/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-800-opaque': 'rgba(31, 41, 55, 0.8)', // gray-800 with 80% opacity
      },
    },
  },
  plugins: [],
}