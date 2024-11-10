module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 7s linear infinite', // Adjust the duration if needed
      },
      keyframes: {
        marquee: {
          '0%' : { transform: 'translateX(110%)' },
          '100%': { transform: 'translateX(-170%)' },
        },
      },
    },
  },
  plugins: [],
}
