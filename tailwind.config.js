const { platformSelect } = require('nativewind/dist/theme-functions')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./src/**/*.tsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      'customize-pin': {
        200: '#DF5BF0',
      },
      'customize-purple': {
        200: '#7e5bef',
      },
      'customize-blue':{
        200: '#5B97F0'
      },
      colors:{
        'plataform-color': platformSelect({
          ios: "#5B97F0",
          android: "#7e5bef",
          default: '#DF5BF0'
        }),
      }
    },
  },
  plugins: [],
};
