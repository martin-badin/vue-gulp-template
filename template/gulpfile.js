const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserify = require('browserify');
const noop = require('gulp-noop');
const source = require('vinyl-source-stream');
const BrowserifyConfig = require('./browserify.config');
const YAML = require('js-yaml');
const fs = require('fs');
const postcss = require('gulp-postcss');

const GULP_CONFIG = YAML.load(fs.readFileSync('./gulp.config.yaml', 'utf8'));

function styles() {
  return gulp
    .src(GULP_CONFIG.style.sources)
    .pipe(process.env.NODE_ENV === 'development' ? sourcemaps.init() : noop())
    .pipe(
      sass({
        includePaths: ['node_modules', 'bower_components'],
      }).on('error', sass.logError)
    )
    .pipe(postcss())
    .pipe(concat(GULP_CONFIG.style.output.name))
    .pipe(
      process.env.NODE_ENV === 'development' ? sourcemaps.write('.') : noop()
    )
    .pipe(gulp.dest(GULP_CONFIG.style.output.path));
}

function scripts() {
  return browserify(GULP_CONFIG.javascript.sources, BrowserifyConfig)
    .bundle()
    .pipe(source(GULP_CONFIG.javascript.output.name))
    .pipe(gulp.dest(GULP_CONFIG.javascript.output.path));
}

gulp.task('build', gulp.parallel(scripts, styles));

gulp.task('watch', () => {
  browserSync.init(GULP_CONFIG.browser_sync);

  gulp.watch('./src/js/**/*', scripts);
  gulp.watch('./src/styles/**/*', styles);
});
