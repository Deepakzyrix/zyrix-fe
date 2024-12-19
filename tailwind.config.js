/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: 'rgb(35, 243, 243)',
        steelblue: 'rgb(17, 6, 47)',
        // lightblue: 'rgb(0, 180, 216)',
        lightblue: 'rgb(72, 202, 228)',
        bluee: 'rgb(3,4,94)',
        bgblue:'rgb(173,232,280)',
        babyblue:'#68bbe3',
        aquamarine:'#0e86d4',
        tiffanyblue:'#055c9d',
        bluegreen:'#003060'
      },
    },
  },
  plugins: [],
}


