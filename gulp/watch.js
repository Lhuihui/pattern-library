/**
* Watches all the files for changes
**/

'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('watch', [
  'styles:watch',
  'views:watch'
]);
