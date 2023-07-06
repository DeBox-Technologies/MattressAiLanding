/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': ['1.25rem', '1.5rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '4.5xl': ['2.5rem', '2.75rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '7.5xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    extend: {
      rounded: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      colors: {
        primary: {
          50: '#D2E7DF',
          100: '#71B4B6',
          200: '#4CA182',
          300: '#42886E'
        },
        secondary: {
          50: '#FFFFFF',
          100: '#4F709C',
          200: '#116A7B'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#303030'
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ]
}
