/* eslint-disable camelcase */
// eslint-disable-next-line import/no-default-export
export default {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Alata&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#000000" },
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
      name: "Moritz Ruth",
      author: "Moritz Ruth",
      description: "Moritz Ruth is a web developer, photograph and digital creator.",
      lang: "en",
      themeColor: "#000000"
    },
    // https://developer.mozilla.org/en-US/docs/Web/Manifest
    manifest: {
      name: "Moritz Ruth",
      short_name: "Moritz Ruth",
      background_color: "#000000",
      display: "browser",
      description: "Moritz Ruth is a web developer, photograph and digital creator."
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // eslint-disable-next-line no-unused-vars
    extend (config, context) {
    }
  }
};
