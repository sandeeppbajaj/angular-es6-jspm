'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([
    '**/*.js',
    '!public/config.js',
    '!public/jspm_packages{,/**}',
    //Exclude since its a generated file
    '!public/modules/html_templates/html_templates.module.js',
    '!coverage{,/**}',
    '!node_modules{,/**}'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});
