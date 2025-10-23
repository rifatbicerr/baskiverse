/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFE8E0',
          100: '#FFD4C7',
          200: '#FFAD95',
          300: '#FF8663',
          400: '#FF6B35',
          500: '#FF4500',
          600: '#CC3700',
          700: '#992900',
          800: '#661B00',
          900: '#330E00',
        },
        secondary: {
          DEFAULT: '#2C3E50',
          50: '#E8EBED',
          100: '#D1D7DB',
          200: '#A3AFB7',
          300: '#758793',
          400: '#475F6F',
          500: '#2C3E50',
          600: '#233240',
          700: '#1A2530',
          800: '#121920',
          900: '#090C10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
