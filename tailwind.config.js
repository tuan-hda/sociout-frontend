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
        container: '1440px',
        side: '400px'
      },
      minWidth: {
        button: '100px',
        main: '600px'
      },
      minHeight: {
        button: '40px'
      },
      backgroundColor: {
        primaryColor: '#17DAC7',
        mainBackground: '#f8f8f8',
        blueGray: '#f5f5f7'
      },
      fontSize: {
        primary: ['1.75rem', '2.125rem']
      },
      textColor: {
        darkBlue: '#393D6E',
        textBlue: '#007DFA'
      }
    }
  },
  plugins: []
}
