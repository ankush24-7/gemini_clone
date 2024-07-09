/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.index.html',
    './src/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

