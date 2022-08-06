/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'rick': 'url("https://c.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif")'
      }
    },
  },
  plugins: [],
}
