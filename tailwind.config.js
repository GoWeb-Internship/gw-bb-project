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
    fontFamily: {
      sans: ['Inter', 'Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
      heads: ['Ubuntu', 'sans-serif'],
      main: ['Inter', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        bb1: '0px 4px 10px rgba(106, 161, 193, 0.25)',
      },
      fontSize: {
        bbForm: ['16px', '19px'],
        bbBase: ['18px', '24px'],
        bb1225: ['12px', '25px'],
        bb1422: ['14px', '22px'],
        bb1424: ['14px', '24px'],
        bb1222: ['12px', '22px'],
        bb1224: ['12px', '24px'],
        bb1625: ['16px', '25px'],
        bb2024: ['20px', '24px'],
        bb2030: ['20px', '30px'],
        bb2040: ['20px', '40px'],
        bb2830: ['28px', '30px'],
        bb2833: ['28px', '33px'],
        bb3237: ['32px', '37px'],
        bb3224: ['32px', '24px'],
        bbTitle1: ['40px', '47px'],
      },
    },
  },
  plugins: [],
};
