/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        dark: '#363853',
        primary: '#0012FF',
        green: '#67D4CA',
        red: '#F28080',
        'dark-light': '#F8FAF8',
      }
    },
  },
  plugins: [],
}

