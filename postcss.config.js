// @flow

const config = {
  plugins: [
    require('postcss-env-replace')({
      environment: process.env.NODE_ENV || 'development',
      replacements: {
        BASE_URL: {
          production: 'http://example.com',
          development: 'http://localhost',
        },
      },
    }),
    require('postcss-color-hex-alpha'),
    require('postcss-image-set-polyfill'),
    require('autoprefixer'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(require('cssnano'));
}

module.exports = config;
