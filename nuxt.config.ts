import { defineNuxtConfig } from "nuxt3"
import Icons from "unplugin-icons/vite"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  buildModules: [
    "nuxt-windicss"
  ],
  css: [
    "@fontsource/plus-jakarta-sans/400.css",
    "@fontsource/plus-jakarta-sans/700.css"
  ],
  vite: {
    plugins: [
      Icons({
        autoInstall: true
      })
    ]
  },
  build: {
    loaders: {
      css: {
        // @ts-expect-error
        module: false
      }
    }
  }
})
