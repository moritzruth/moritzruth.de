import vuePlugin from "@vitejs/plugin-vue"
import windicssPlugin from "vite-plugin-windicss"
import pagesPlugin from "vite-plugin-pages"

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vuePlugin(),
    pagesPlugin(),
    windicssPlugin()
  ]
}
