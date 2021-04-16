import vuePlugin from "@vitejs/plugin-vue"
import windicssPlugin from "vite-plugin-windicss"

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vuePlugin(),
    windicssPlugin()
  ]
}
