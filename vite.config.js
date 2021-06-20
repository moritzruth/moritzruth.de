import vuePlugin from "@vitejs/plugin-vue"
import windicssPlugin from "vite-plugin-windicss"
import pagesPlugin from "vite-plugin-pages"
import vueI18nPlugin from "@intlify/vite-plugin-vue-i18n"

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vuePlugin(),
    vueI18nPlugin(),
    pagesPlugin(),
    windicssPlugin()
  ]
}
