const gulp = require('gulp');
const eslint = require('gulp-eslint');

const CONFIG = require('../config');

module.exports = () => {
  return gulp
    .src(CONFIG.gulp.javascript.sources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};
