module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topography-light': "url('./img/topography-light.svg')",
        'topography-dark': "url('./img/topography-dark.svg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
