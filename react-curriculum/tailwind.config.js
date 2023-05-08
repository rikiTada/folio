module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': '#00cba9'
      },
      animation: {
        'tracking-in-expand':
          'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both'
      },
      keyframes: {
        'tracking-in-expand': {
          '0%': { 'letter-spacing': '-.5em', opacity: '0' },
          '40%': { opacity: '.6' },
          to: { opacity: '1' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
