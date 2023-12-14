const { nextui } = require('@nextui-org/react')
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')

const typography = require('@tailwindcss/typography')

const colors = {
  primary: {
    DEFAULT: '#3a6eff',
    50: '#ebf1ff',
    100: '#d8e2ff',
    200: '#b0c5ff',
    300: '#89a8ff',
    400: '#618bff',
    500: '#3a6eff',
    600: '#2e58cc',
    700: '#234299',
    800: '#172c66',
    900: '#0c1633',
  },
  secondary: {
    DEFAULT: '#ef7600',
    50: '#fdf1e6',
    100: '#fce4cc',
    200: '#f9c899',
    300: '#f5ad66',
    400: '#f29133',
    500: '#ef7600',
    600: '#bf5e00',
    700: '#8f4700',
    800: '#602f00',
    900: '#301800',
  },
  tertiary: {
    DEFAULT: '#05889f',
    50: '#e6f3f5',
    100: '#cde7ec',
    200: '#9bcfd9',
    300: '#69b8c5',
    400: '#37a0b2',
    500: '#05889f',
    600: '#046d7f',
    700: '#03525f',
    800: '#023640',
    900: '#011b20',
  },
  error: '#e25336',
  warning: '#edbe5e',
  info: '#414958',
  success: '#a8d161',
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    join(
      __dirname,
      '{src,pages,components,app,client-components,}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    '../ui/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        script: ['Sophistica'],
      },
      screens: {
        mobile: { max: '639px' },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            ...colors,
          },
        },
      },
    }),
    typography,
  ],
}

module.exports = config
