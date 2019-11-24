const YAML = require('js-yaml');
const fs = require('fs');

module.exports = {
  gulp: YAML.load(fs.readFileSync('./gulp.config.yaml', 'utf8')),
};
