/**
* Serve site
**/

'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('serve', function (cb) {
  return runSequence(
    ['browser-sync', 'watch'],
    cb
  );
});
