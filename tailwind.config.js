/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5E5B',//red
        secondary: '#00CECB',//blue?
        bg: '#FFFFEA',//almost white
        accent: '#FFED66',//yellow
        accentd:'#DE6B48',//red
        redd:'#f0554b'
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
