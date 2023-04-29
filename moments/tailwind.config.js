/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
