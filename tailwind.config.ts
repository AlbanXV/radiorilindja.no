import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,ts,tsx}"],
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
} satisfies Config

