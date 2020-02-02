const del = require('del');

const CONFIG = require('../config');

module.exports = () => {
  return del(CONFIG.gulp.style.output.path, { force: true });
};

module.exports.displayName = 'clean';
