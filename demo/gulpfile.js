var gulp = require('gulp'),
    templater = require('./dist/templater.gulp-min.js'),
    beautify = require('gulp-html-beautify');

gulp.task('templater', function() {
  return gulp.src(['./src/index.html'])

    .pipe(templater('panel','<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>'))

    .pipe(beautify())

    .pipe(gulp.dest('dist/'))
});
