module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['flowtype', 'vue', 'flowtype-errors'],
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  env: {
    node: true,
  },
};
