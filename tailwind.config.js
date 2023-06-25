const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
        'serif': ['Georgia', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
