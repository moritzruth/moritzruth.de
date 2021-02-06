const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./index.html", "./src/**/*.vue"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
