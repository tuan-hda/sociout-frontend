/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      height: {
        button: '42px'
      },
      maxWidth: {
        side: '400px'
      },
      minWidth: {
        button: '100px',
        main: '600px'
      },
      backgroundColor: {
        primaryColor: '#17DAC7',
        mainBackground: '#f8f8f8'
      }
    }
  },
  plugins: []
}
