const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

module.exports = () => {
  return gulp
    .src('./src/styles/**/*.scss')
    .pipe(
      gulpStylelint({
        fix: true,
        reporters: [{ formatter: 'string', console: true }],
      })
    )
    .pipe(gulp.dest('./src/styles/'));
};
