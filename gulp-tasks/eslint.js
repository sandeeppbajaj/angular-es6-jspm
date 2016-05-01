'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([
    '**/*.js',
    '!public/config.js',
    '!public/jspm_packages{,/**}',
    '!node_modules{,/**}'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});
