const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const CONFIG = require('../config');

module.exports = () => {
  return browserify(CONFIG.gulp.javascript.sources, CONFIG.browserify)
    .bundle()
    .pipe(source(CONFIG.gulp.javascript.output.name))
    .pipe(gulp.dest(CONFIG.gulp.javascript.output.path));
};
