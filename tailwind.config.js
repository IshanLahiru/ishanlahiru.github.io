/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'Times New Roman', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      colors: {
        np: {
          paper: '#F9F9F7',
          ink: '#111111',
          accent: '#CC0000',
          muted: '#E5E5E0',
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          'paper-night': '#121212',
          'ink-night': '#F2F0EA',
          'accent-night': '#FF5C4D',
          'muted-night': '#242420',
          '400-night': '#A8A8A2',
          '500-night': '#8F8F86'
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
