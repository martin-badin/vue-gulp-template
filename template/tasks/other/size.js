const gulp = require('gulp');
const size = require('gulp-check-filesize');

const CONFIG = require('../config');

module.exports = () => {
  return gulp
    .src([`${CONFIG.gulp.javascript.output.path}/*`, `${CONFIG.gulp.style.output.path}/*`])
    .pipe(size({ showFiles: true, enableGzip: true }))
    .pipe(gulp.dest('dist'));
};

module.exports.displayName = 'size';
