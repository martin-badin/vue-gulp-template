const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const CONFIG = require('./tasks/config');

/**
 * Sass tasks
 */
gulp.task('sass:clean', gulp.series(require('./tasks/sass/clean')));
gulp.task('sass:lint', gulp.series(require('./tasks/sass/lint')));
gulp.task('sass:build', gulp.series(require('./tasks/sass/build')));

/**
 * Javascript tasks
 */
gulp.task('javascript:clean', gulp.series(require('./tasks/javascript/clean')));
gulp.task('javascript:lint', gulp.series(require('./tasks/javascript/lint')));
gulp.task('javascript:build', gulp.series(require('./tasks/javascript/build')));

/**
 * Common tasks
 */
gulp.task('build', gulp.series('javascript:build', 'sass:build'));
gulp.task('clean', gulp.series('javascript:clean', 'sass:clean'));
gulp.task('lint', gulp.series('javascript:lint', 'sass:lint'));

/**
 * Watch task
 */
gulp.task('watch', () => {
  browserSync.init(CONFIG.gulp.browser_sync);

  gulp.watch('./src/js/**/*', gulp.series('javascript:build'));
  gulp.watch('./src/styles/**/*', gulp.series('sass:build'));
});
