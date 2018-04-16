// @flow

const config = {
  transform: ['vueify', 'babelify'],
  debug: false,
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
