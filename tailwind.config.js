module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5d7763",
        secondary: "#101010"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
