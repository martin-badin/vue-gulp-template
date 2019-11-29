const ts = require('typescript');
const config = require('./tasks/config');

module.exports = {
  customCompilers: {
    ts: function(content, cb) {
      const result = ts.transpileModule(content, config.typescript);
      cb(null, result.outputText);
    },
  },
};
