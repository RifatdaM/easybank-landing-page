module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors:{
        Primary:{
          "DarkBlue": "hsl(233, 26%, 24%)",
          "LimeGreen": "hsl(136, 65%, 51%)",
          "BrightCyan": "hsl(192, 70%, 51%)",
        },
        Neutral:{
          "GrayishBlue": "hsl(233, 8%, 62%)",
          "LightGrayishBlue": "hsl(220, 16%, 96%)",
          "VeryLightGray": "hsl(0, 0%, 98%)",
          "White": "hsl(0, 0%, 100%)",
        },
      },
      fontFamily:{
        "PublicSans":"'Public Sans', sans-serif"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
