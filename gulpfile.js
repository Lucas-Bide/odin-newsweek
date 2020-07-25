const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function style() {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
}

exports.style = style;

function watch () {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "index.html"
    }
  });
  gulp.watch('assets/scss/*.scss', style);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('assets/scss/*.scss').on('change', browserSync.reload);
}

exports.watch = watch;