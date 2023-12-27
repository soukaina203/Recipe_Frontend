require('@tailwindcss/forms'),
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
        colors: {
          white1: '#EEEFF1',
          btn: '#5b7c99',
          btn1: "#4d6885",
          btn2: '#3e5a73',

        }
      },


      // colors: {
      //   black: '#000000',
      //   white: '#FFFFFF',
      //   whiteBg: '#EEEFF1',
      //   red: '#FF0000',
      //   pink: '#E91E63',
      //   purple: '#9C27B0',
      //   indigo: '#3F51B5',
      //   gray: '#9E9E9E',
      //   grayWhite: '#B0B0B0',
      //   blue: '#3B82F6',
      //   transparent: '#00000000'

      // }
       fontWeight: {
        base: '16px',
        sm: '14px',
        lg: '18px',
      },
      keyframes: {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'showUp': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },

        }
      },

      animation: {
        'rotate': 'rotate 10s linear infinite', // Rotate animation for 2 seconds infinitely

        'showUp': 'showUp 0.5s ease-in-out', // Durée de l'animation et l'interpolation

      }
    },
    plugins: [

    ],
  }

