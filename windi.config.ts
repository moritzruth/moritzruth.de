import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"
import interactionVariantsPlugin from "@windicss/plugin-interaction-variants"

export default defineConfig({
  darkMode: "media",
  theme: {
    colors: {
      pink: colors.fuchsia,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      dark: colors.dark,
      light: colors.light
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      special: ["SyneVariable", "monospace"]
    }
  },
  plugins: [
    interactionVariantsPlugin
  ]
})
