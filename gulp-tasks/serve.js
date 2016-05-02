'use strict';

var browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

gulp.task('serve',
  [
    'browser-sync'
  ],
  function () {
    gulp.watch('public/**/*.js', 'eslint').on('change', reload);
    gulp.watch('public/styles.css').on('change', reload);
    gulp.watch('public/**/*.less', ['less']);
    gulp.watch('**/*.tpl.html', ['ngtemplate']);
  }
);

gulp.task('browser-sync',
  [
    'nodemon'
  ],
  function() {
    browserSync.init(null, {
      proxy: 'http://localhost:8086',
      browser: 'google-chrome',
      port: 8087
    });
  }
);

gulp.task('nodemon',
  [
    'eslint',
    'less',
    'ngtemplate'
  ],
  function (done) {
    var running = false;

    return nodemon({
      script: 'server/app.js',
      watch: ['server/**/*.*']
    })
    .on('start', function () {
      if (!running) {
        done();
      }
      running = true;
    })
    .on('restart', function () {
      setTimeout(function () {
        reload();
      }, 500);
    });
  }
);
