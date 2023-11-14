/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'neonblue': '#10CDD9',
      agua: '#178D95',
      darkpurple : '#0B0021',
      lightpurple: '#70618D',
      midpurple: '#443A58',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

