const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const CONFIG = require('../config');

module.exports = () => {
  return browserify(CONFIG.gulp.javascript.sources, {
    debug: process.env.NODE_ENV !== 'production',
  })
    .plugin('tslintify', { format: 'stylish' })
    .plugin('tsify')
    .transform('vueify-next')
    .transform('babelify', { extensions: ['.ts', '.tsx', '.js'] })
    .transform('envify', { global: true })
    .transform('uglifyify', {
      mangle: true,
      global: true,
      sourceMap: process.env.NODE_ENV !== 'production',
      compress: {
        sequences: true,
        dead_code: true,
        booleans: true,
      },
    })
    .bundle()
    .pipe(source(CONFIG.gulp.javascript.output.name))
    .pipe(gulp.dest(CONFIG.gulp.javascript.output.path));
};
