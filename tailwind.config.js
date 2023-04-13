/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        green: 'url(/img/green.jpg)',
        code: 'url(/img/happy.jpg)',
        cartoon: 'url(/img/cartoon.jpg)',
      },
    },
  },
  plugins: [],
};
