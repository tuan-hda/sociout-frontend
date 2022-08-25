/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        small: '738px',
        medium: '1056px',
        authRes: '1120px',
        large: '1280px'
      },
      colors: {
        primaryColor: '#1A86F1',
        idColor: '#536471',
        mainBackground: '#f5f5f5',
        textColor: '#333',
        linkColor: '#1d9bf0',
        disabledColor: '#B2B1B6',
        errorColor: '#f44336',
        borderColor: '#ababab'
      },
      width: {
        authHalf: '560px',
        main: '600px'
      },
      height: {
        button: '42px'
      },
      maxWidth: {
        container: '1280px',
        side: '312px',
        main: '600px',
        authRes: '1120px',
        medium: '1056px',
        small: '722px'
      },
      minWidth: {
        button: '100px',
        authHalf: '560px'
      },
      minHeight: {
        button: '40px'
      },
      backgroundColor: {
        blueGray: '#f5f5f7'
      },
      fontSize: {
        primary: ['1.75rem', '2.125rem'],
        normalText: ['14px', '18px']
      },
      textColor: {
        darkBlue: '#393D6E',
        textBlue: '#007DFA',
        darkInput: '#3C4071'
      },
      outlineColor: {
        lightBlue: '#80BEFC'
      },
      boxShadow: {
        primary: '0 0 24px -4px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
}
