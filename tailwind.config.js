/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'blob': 'blob 10s infinite ease-in-out',
        'float-3d': 'float-3d 6s infinite ease-in-out',
        'holographic-gold': 'holographic-shift 4s infinite linear',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.2)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.8)' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(-5deg) rotateY(5deg)' },
          '75%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)' },
        },
        'holographic-shift': {
          '0%, 100%': { filter: 'hue-rotate(0deg) brightness(1)' },
          '50%': { filter: 'hue-rotate(-20deg) brightness(1.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
