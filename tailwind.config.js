/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'font-base': 'var(--font-base)',
      'primary-color': '#edf2f8',
      'secondary-color': '#313bac',
      'black-color': '#030303',
      'lightGray-color': '#e4e4e4',
      'gray-color': '#6b7688',
      'brown-color': '#46364a',
      'white-color': '#ffffff',
    },
    backgroundImage: {
      'img1':"url('../assets/bgWhite.png')"
    }
  },
  plugins: [],
}

