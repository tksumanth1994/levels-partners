module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5d7763",
        "primary-100": "#eef1ef",
        secondary: "#101010"
      },
      backgroundImage: {
        'pattern': "url('/static/bg.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
