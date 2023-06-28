/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'header': ['Lato', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
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
          900: '#111827'
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ]
}
