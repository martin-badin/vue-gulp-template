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
      ecma: 5,
      mangle: true,
      global: true,
      module: true,
      sourceMap: process.env.NODE_ENV === CONFIG.DEVELOPMENT,
    })
    .bundle()
    .pipe(source(CONFIG.gulp.javascript.output.name))
    .pipe(gulp.dest(CONFIG.gulp.javascript.output.path));
};
