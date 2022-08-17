/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      boxShadow: {
        bb1: '0px 4px 10px rgba(106, 161, 193, 0.25)',
      },
      fontSize: {
        bbBase: ['18px', '24px'],
        bbTitle1: ['40px', '36px'],
      },
    },
  },
  plugins: [],
};
