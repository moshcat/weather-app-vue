/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#000000',
        'weather-secondary': '#e1e1e1',
        'weather-tertiary': '#818181',
        'weather-blue': '#2563eb',
      },
      fontFamily: {
        IBMPlexMono: ['IBM Plex Mono, sans-serif'],
      },
      container: {
        padding: '2rem',
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
