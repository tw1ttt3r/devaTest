module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}
