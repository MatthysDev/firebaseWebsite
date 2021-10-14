module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto Mono', monospace",
        robo: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
