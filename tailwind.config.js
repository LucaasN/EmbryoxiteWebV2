/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-teal': '#00B8C4',
        'primary-coral': '#FF6B5A',
        'primary-orange': '#FF8A65',
        'accent-orange': '#F37B55',
        'accent-teal': '#0095A0',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'slide-up': 'slideInUp 0.8s ease-out forwards',
        'slide-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-right': 'slideInRight 0.8s ease-out forwards',
        'fade-scale': 'fadeInScale 0.6s ease-out forwards',
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'particle-float': 'particleFloat 12s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
};