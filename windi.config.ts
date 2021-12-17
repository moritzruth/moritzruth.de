import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"
import scrollSnapPlugin from "windicss/plugin/scroll-snap"
import plugin from "windicss/plugin"

export default defineConfig({
  darkMode: "media",
  theme: {
    colors: {
      pink: colors.fuchsia,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      dark: colors.dark,
      light: colors.light,
      background: "#070707"
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"]
    }
  },
  plugins: [
    scrollSnapPlugin,
    plugin(({ addVariant }) => {
      addVariant("can-hover", ({ atRule }) => {
        return atRule("@media(hover: hover)")
      })
    })
  ]
})
