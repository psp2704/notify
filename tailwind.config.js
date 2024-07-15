/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        navy: '#14213d',
        orange: '#fca311',
        lightgray: '#e5e5e5',
        white: '#ffffff',
        gradient1 : 'linear-gradient(90deg, rgba(254,254,255,1) 0%, rgba(9,24,121,0.6643032212885154) 55%, rgba(160,92,254,1) 100%)',
      },
      textColor: {
        DEFAULT: '#1a202c', // gray-900
      },
      minWidth: {
        '1280': '1280px',
        '260':'260px',
        '180':'180px',
      },
      fontSize: {
        base: '14px', // Set the default font size here
      },
    },
  },
  plugins: [],
}