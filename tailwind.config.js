/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          text: '#333333',
          accent: '#4A90E2',
        },
        dark: {
          bg: '#1A1B26',
          text: '#E5E5E5',
          accent: '#66D9EF',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}