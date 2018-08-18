module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['flowtype', 'vue', 'html', 'flowtype-errors'],
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    'flowtype-errors/show-errors': 2,
  },
  env: {
    node: true,
  },
};
