/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        'hero': 'calc(100vh - 64px)',
      },
      colors: {
        'soft-theme': '#a3e635',
        'dark-theme': '#65a30d',
      }
    },
  },
  plugins: [],
}

