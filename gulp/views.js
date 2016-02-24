/**
* Compiles HTML
**/

'use strict';

var config = require('../config.js'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

// Paths
var destPath = config.paths.build.root + '/index.html';

gulp.task('views', function() {
  // compile html
});

gulp.task('views:watch', function() {
  return gulp.watch(destPath).on('change', function() {
    runSequence('views', 'browser-sync-reload');
  });
});
