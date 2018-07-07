// @flow

const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const path = require('path');
const browserify = require('browserify');
const noop = require('gulp-noop');
const source = require('vinyl-source-stream');
const BrowserifyConfig = require('./browserify.config');
const YAML = require('js-yaml');
const fs = require('fs');
const postcss = require('gulp-postcss');

const GULP_CONFIG = YAML.load(fs.readFileSync('./gulp.config.yaml', 'utf8'));
const SRC_PATH = path.join(__dirname, '/src');

gulp.task('style', () =>
  gulp
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
    .pipe(gulp.dest(GULP_CONFIG.style.output.path))
);

gulp.task('js', () =>
  browserify(GULP_CONFIG.javascript.sources, BrowserifyConfig)
    .bundle()
    .pipe(source(GULP_CONFIG.javascript.output.name))
    .pipe(gulp.dest(GULP_CONFIG.javascript.output.path))
);

gulp.task('version', () => {
  const config = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const parsed = config.version.split('.').map(number => parseInt(number));

  function increment(number) {
    if (number < 9) {
      return ++number;
    }

    return 0;
  }

  parsed[2] = increment(parsed[2]);

  if (parsed[2] === 0) {
    parsed[1] = increment(parsed[1]);

    if (parsed[1] === 0) {
      parsed[0] = increment(parsed[0]);
    }
  }

  config.version = parsed.join('.');

  fs.writeFileSync('./package.json', JSON.stringify(config, null, '\t'));
});

gulp.task('build', ['js', 'style', 'version']);

gulp.task('watch', () => {
  browserSync.init(GULP_CONFIG.browser_sync);

  gulp.watch(path.join(SRC_PATH, '/js/**/*'), ['js']);
  gulp.watch(path.join(SRC_PATH, '/styles/**/*'), ['style']);
});
