/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        '100': '#FCFCFC',
        '800': '#1D262D',
        '900': '#000A2D',
      },
      blue: {
        ...colors.blue,
        '200': '#EEF3FF',
        '250': '#AECDF8',
        '300': '#AEBEE4',
        '500': '#035CDD',
        '550': '#4563D9',
        '600': '#475CDC',
      },
      indigo: {
        ...colors.indigo,
        '400': '#7C8AE4',
      },
      teal: {
        ...colors.teal,
        '400': '#2FDABE',
      }
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
    },
    fontSize: {
      ...fontSize,
      '5xl': ['52px', '65px'],
    },
    extend: {
      keyframes: {
        spin_open: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        spin_close: {
          '0%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'spin_open': 'spin_open 0.2s linear',
        'spin_close': 'spin_close 0.2s linear',
      },
    },
  },
  plugins: [],
}

