const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto Condensed',
          'Source Sans Pro',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.62)',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [require('@tailwindcss/typography', '@tailwindcss/aspect-ratio')],
}
