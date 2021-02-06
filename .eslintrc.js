module.exports = {
  root: true,
  extends: ["awzzm-vue/v3"],
  overrides: [
    {
      files: [".eslintrc.js"],
      env: {
        node: true
      }
    }
  ]
}
