/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3C5D',
        secondary: '#E6F0FA',
        accent: '#F5A623',
        text: '#1A1A1A',
      },
    },
  },
  plugins: [],
}