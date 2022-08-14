/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        authRes: '1120px'
      },
      width: {
        authHalf: '560px'
      },
      height: {
        button: '42px'
      },
      maxWidth: {
        container: '1280px',
        side: '320px',
        authRes: '1120px'
      },
      minWidth: {
        button: '100px',
        main: '600px',
        authHalf: '560px'
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
        textBlue: '#007DFA',
        darkInput: '#3C4071'
      },
      outlineColor: {
        lightBlue: '#80BEFC'
      }
    }
  },
  plugins: []
}
