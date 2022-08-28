module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    fontFamily: {
      serif: ['Raleway', 'sans-serif'],
      cursive: ['Oleo Script', 'cursive'],
    },
    extend: {
      fontSize: {
        '6xl': '4.125rem',
      },
      colors: {
        primary: '#27231f',
        secondary: '#303030',
        light: '#7b6c63',
        lightest: '#949494',
        lightGrey: '#f5f5f5'
      }
    },
  },
  plugins: [],
}
