/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'rr': "url('assets/rr.png')"
      },
      animation: {
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      }
    },
  },
  plugins: [],
}

