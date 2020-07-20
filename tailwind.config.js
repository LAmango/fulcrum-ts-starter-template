module.exports = {
    purge: [
    './src/**/*.js',
  ],
  theme: {
          extend: {
                  transitionProperty: {
                    'maxWidth': "max-width"
                  },
                  height: {
                    '5p': "5%",
                    '95p': "95%"
                  },
            maxWidth: {
                    "screen-mobile": "375px"
            }
          },
  },
  variants: {},
  plugins: [],
}
