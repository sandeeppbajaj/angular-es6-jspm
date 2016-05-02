'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([
    '**/*.js',
    '!public/config.js',
    '!public/jspm_packages{,/**}',
    '!node_modules{,/**}',
    '!public/modules/html_templates/html_templates.module.js' //Exclude since its a generated file 
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});
