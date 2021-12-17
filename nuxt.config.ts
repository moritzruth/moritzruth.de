import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  buildModules: [
    "nuxt-windicss",
    "unplugin-icons/nuxt"
  ],
  css: [
    "@fontsource/plus-jakarta-sans/400.css",
    "@fontsource/plus-jakarta-sans/700.css"
  ],
  build: {
    loaders: {
      css: {
        // @ts-expect-error
        module: false
      }
    }
  }
})
