import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      special: ["Syne", "monospace"]
    },
    extend: {
      colors: {
        blue: {
          900: "#0041ff"
        }
      }
    }
  }
})
