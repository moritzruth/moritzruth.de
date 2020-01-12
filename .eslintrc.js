module.exports = {
  "root": true,
  "env": {
    browser: true,
    node: true,
    es6: true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:nuxt/recommended",
    "@moritzruth",
    "@moritzruth/eslint-config/vue"
  ],
  rules: {
    "no-unused-vars": "warn"
  },
  "settings": {
    "import/resolver": {
      webpack: {
        config: "webpack.resolve.js"
      }
    }
  }
};
