/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Poppins', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      colors: {
        np: {
          paper: '#FAFAF8',
          ink: '#151312',
          accent: '#0099FF',
          accent2: '#F4623C',
          pop: '#C7FF4D',
          muted: '#E4E2DE',
          100: '#F1F0ED',
          200: '#E4E2DE',
          400: '#8A8985',
          500: '#6E6D69',
          600: '#55534F',
          700: '#3D3B38',
          'paper-night': '#131110',
          'ink-night': '#F5F4F0',
          'accent-night': '#33A6FF',
          'muted-night': '#2A2826',
          '400-night': '#9A9894',
          '500-night': '#B4B2AD'
        }
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.4' }
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-80px)' }
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        wave: 'wave 3s linear infinite',
        bob: 'bob 2s ease-in-out infinite',
        'loading-bar': 'loading-bar 1.1s ease-in-out infinite'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
  darkMode: 'class'
};
