const config = {
  transform: ['vueify-next', ['babelify', { extensions: ['.ts'] }]],
  plugins: ['tsify'],
  debug: process.env.NODE_ENV !== 'production',
};

if (process.env.NODE_ENV === 'production') {
  config.transform.push(['envify', { global: true }]);
  config.transform.push([
    'uglifyify',
    {
      mangle: true,
      global: true,
      sourceMap: false,
      compress: {
        sequences: true,
        dead_code: true,
        booleans: true,
      },
    },
  ]);
}

module.exports = config;
