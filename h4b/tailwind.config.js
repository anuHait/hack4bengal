/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'khand': ['Khand', 'sans-serif']
      },
      colors: {
        primary: '#364BDB;',
      },
      keyframes: {
        float: {
            '0%': { transform: 'translatey(0px)' },
            '50%': { transform: 'translatey(-15px)' },
            '100%': { transform: 'translatey(0px)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}