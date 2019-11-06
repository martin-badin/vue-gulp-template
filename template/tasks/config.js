const YAML = require('js-yaml');
const fs = require('fs');

const browserify = {
  transform: ['vueify-next', ['babelify', { extensions: ['.ts'] }]],
  plugins: ['tsify'],
  debug: process.env.NODE_ENV !== 'production',
};

if (process.env.NODE_ENV === 'production') {
  browserify.transform.push(['envify', { global: true }]);
  browserify.transform.push([
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

module.exports = {
  browserify: browserify,
  gulp: YAML.load(fs.readFileSync('./gulp.config.yaml', 'utf8')),
};
