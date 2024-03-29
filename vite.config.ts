import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import windicssPlugin from "vite-plugin-windicss"
import pagesPlugin from "vite-plugin-pages"
import iconsPlugin from "unplugin-icons/vite"

export default defineConfig({
  plugins: [
    vuePlugin(),
    pagesPlugin({
      syncIndex: false
    }),
    windicssPlugin(),
    iconsPlugin()
  ],
  ssgOptions: {
    formatting: "minify",
    format: "cjs",
    includedRoutes(routes) {
      return routes.filter(route => !route.includes(":") && route !== "/blog")
    }
  }
})
