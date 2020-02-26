const del = require('del');

const CONFIG = require('../config');

module.exports = () => {
  return del(CONFIG.gulp.javascript.output.path, { force: true });
};
