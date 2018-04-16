// @flow

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  plugins: ["flowtype", "vue"],
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  env: {
    node: true
  }
};
