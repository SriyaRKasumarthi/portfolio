/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'beige': {
          50: '#F8F5EF',
          100: '#F0EDE5',
          200: '#EAE7DC',
          300: '#D4C4A0',
          400: '#C4B088',
          500: '#B8A47A',
          600: '#A8966B',
          700: '#9A8A5C',
          800: '#8C7E4D',
          900: '#7E723E',
        },
        'text': '#2A2A2A',
        'accent': '#EAE7DC',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 0.3s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(184, 164, 122, 0.4)'
          },
          '100%': {
            boxShadow: '0 0 20px 0 rgba(184, 164, 122, 0.6)'
          }
        },
        parallax: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-50%)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}