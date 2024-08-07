/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx, mdx,}",],
  theme: {
    colors: {
      ...colors,
      teal: {
        '900': '#244B3F',
        '800': '#306759',
        '700': '#357767',
        '600': '#3A8776',
        '500': '#3F9482',
        '400': '#4CA494',
        '300': '#64B4A6',
        '200': '#8CCABF',
        '100': '#B8DED8',
        '50': '#ECF6F5',
      },
      cyan: {
        '900': '#0E3B4D',
        '800': '#225165',
        '700': '#30647B',
        '600': '#3F7992',
        '500': '#4C88A4',
        '400': '#669AB4',
        '300': '#7FAEC6',
        '200': '#9EC6DB',
        '100': '#BBDFF0',
        '50': '#DAF3FF',
      },
      blue: {
        '900': '#2A2F6B',
        '800': '#364082',
        '700': '#3D4A8E',
        '600': '#45549A',
        '500': '#4C5CA4',
        '400': '#6674B0',
        '300': '#818EBE',
        '200': '#A4AED1',
        '100': '#C7CDE4',
        '50': '#E9EBF4',
      },
      fuchsia: {
        '900': '#3C1B6C',
        '800': '#56257C',
        '700': '#662985',
        '600': '#762F8E',
        '500': '#823394',
        '400': '#944CA4',
        '300': '#A669B4',
        '200': '#BF92CA',
        '100': '#D8BDDE',
        '50': '#EFE4F1',
      },
      green: {
        '900': '#30603E',
        '800': '#3C8051',
        '700': '#43925C',
        '600': '#4CA468',
        '500': '#54B372',
        '400': '#6CBF87',
        '300': '#86CA9C',
        '200': '#A8D8B7',
        '100': '#C9E7D3',
        '50': '#E9F6ED',
      },
      rose: {
        '900': '#663E4A',
        '800': '#8E4756',
        '700': '#A44C5C',
        '600': '#BA5262',
        '500': '#CB5766',
        '400': '#D26479',
        '300': '#DB798F',
        '200': '#E59BAD',
        '100': '#EFC1CD',
        '50': '#F8E6EB',
      },
    },
    fontFamily: {
      sans: ['var(--font-mulish)'],
      serif: ['var(--font-marcellus)'],
    },
    extend: {
      keyframes: {
        slide_open: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slide_close: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'slide_open': 'slide_open 0.5s forwards',
        'slide_close': 'slide_close 0.5s forwards',
      },
    },
  },
  plugins: [],
}

