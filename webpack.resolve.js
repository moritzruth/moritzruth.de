// eslint-disable-next-line import/no-extraneous-dependencies
const path = require("path");

// Used by ESLint and WebStorm

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname)
    }
  }
};
