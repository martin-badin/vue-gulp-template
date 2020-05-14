const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const noop = require('gulp-noop');

const CONFIG = require('../config');

module.exports = () => {
  console.log('Environment', process.env.NODE_ENV);

  return gulp
    .src(CONFIG.gulp.style.sources)
    .pipe(process.env.NODE_ENV === 'development' ? sourcemaps.init() : noop())
    .pipe(
      sass({
        includePaths: ['node_modules', 'bower_components'],
      }).on('error', sass.logError)
    )
    .pipe(postcss())
    .pipe(concat(CONFIG.gulp.style.output.name))
    .pipe(process.env.NODE_ENV === 'development' ? sourcemaps.write('.') : noop())
    .pipe(gulp.dest(CONFIG.gulp.style.output.path));
};
