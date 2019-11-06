const gulp = require('gulp');
const eslint = require('gulp-eslint');

module.exports = () => {
  return gulp
    .src('./src/js/**/*.{ts,vue}')
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest('./src/js/'));
};
