const ts = require('typescript');

module.exports = {
  customCompilers: {
    ts: function(content, cb) {
      const result = ts.transpileModule(content, {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
        },
      });
      cb(null, result.outputText);
    },
  },
};
