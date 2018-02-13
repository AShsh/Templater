var gulp = require('gulp'),
  minify = require('gulp-minify'),
  concat = require('gulp-concat');

gulp.task('build-jquery', function () {
  return gulp.src(['src/templater.js', 'src/templater.jquery.js'])
    .pipe(concat('templater.jquery.js'))
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('build-gulp', function () {
  return gulp.src(['src/templater.js', 'src/templater.gulp.js'])
    .pipe(concat('templater.gulp.js'))
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy-js', function () {
  return gulp.src(['src/templater.js'])
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('build', ['build-gulp', 'build-jquery', 'copy-js']);
