import manifest from "./manifest.json"

// eslint-disable-next-line import/no-default-export
export default {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s | ${manifest.name}`,
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#ffffff" },
  /*
  ** Global CSS
  */
  css: ["@/assets/styles/global.scss"],

  layoutTransition: "page",
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vue-ripple-directive"],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "svg-to-vue-component/nuxt",
    "@nuxtjs/pwa"
  ],

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: { workboxExtensions: ["@/assets/js/font-sw.js"] },

  pwa: {
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
      mobileApp: false,
      name: manifest.name,
      author: "Moritz Ruth",
      description: manifest.description,
      lang: "en",
      themeColor: "#000000"
    },
    // https://developer.mozilla.org/en-US/docs/Web/Manifest
    manifest
  }
}
