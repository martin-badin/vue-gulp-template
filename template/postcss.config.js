const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-image-set-polyfill'),
    require('autoprefixer'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(require('cssnano'));
}

module.exports = config;
