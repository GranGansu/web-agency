/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5E5B', //red
        secondary: '#FFDDE2', //blue?
        bg: '#a4a4a40a', //almost white
        accenat: '#FFED66', //yellow
        accentd: '#DE6B48', //red
        accent: '#ffef01',
        redd: '#f0554b',
        premium: '#121212',
      },
      backgroundImage: {
        green: 'url(/img/green.jpg)',
        code: 'url(/img/happy.jpg)',
        cartoon: 'url(/img/cartoon.jpg)',
        rainbow: 'url(/img/rainbow.png)',
      },
    },
  },
  plugins: [],
};
