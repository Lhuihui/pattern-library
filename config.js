'use strict';

var src = './src',
    build = './build';

module.exports = {
  paths: {
    src: {
      root: src,
      styles: src + '/scss'
    },
    build: {
      root: build,
      styles: build + '/css',
      views: build + '/index.html'
    }
  }
};
