/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
        sansMono: ['Space Mono', 'monospace'],
        mono: ['Space Mono', 'monospace']
      },
      colors: {
        dm: {
          carbon: '#222222',
          soot: '#333333',
          dark: '#444444',
          smoke: '#666666',
          clay: '#6c6c58',
          mud: '#8a8a6f',
          ash: '#8e8e8e',
          cement: '#c0c0c0',
          aluminum: '#cccccc',
          enamel: '#eeeeee',
          accent: '#ffa133',
          accent2: '#e47b1a'
        }
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        draw: {
          '0%': { strokeDashoffset: '1200' },
          '100%': { strokeDashoffset: '0' }
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
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        draw: 'draw 2.4s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        wave: 'wave 3s linear infinite',
        bob: 'bob 2s ease-in-out infinite'
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
