/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050505',
          800: '#0a0a0a',
          700: '#121212',
          600: '#1a1a1a',
          500: '#242424',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C766',
          dark: '#A8842A',
        },
        champagne: {
          DEFAULT: '#C8A96A',
          light: '#E4D2A8',
          dark: '#9C8152',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.35em',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
