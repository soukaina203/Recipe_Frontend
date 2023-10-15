/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {

    extend: {
        screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
      },
    },keyframes:{
      'rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      'showUp':{
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },

      }
    },
    // backgroundColor:{
    //   'footer-white':'#F0EFED',
    //   'black':''
    // },
    animation:{
      'rotate': 'rotate 10s linear infinite', // Rotate animation for 2 seconds infinitely

      'showUp': 'showUp 0.5s ease-in-out', // Durée de l'animation et l'interpolation

    }
  },
  plugins: [],
}

