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
  css: [
    "@/assets/css/global.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/vue-ripple-directive"
  ],
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
  workbox: {
    workboxExtensions: [
      "@/assets/js/fontSW.js"
    ]
  },

  pwa: {
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
      mobileApp: false,
      name: "Moritz Ruth",
      author: "Moritz Ruth",
      description: "The official website of Moritz Ruth",
      lang: "en",
      themeColor: "#ffffff"
    },
    // https://developer.mozilla.org/en-US/docs/Web/Manifest
    manifest: {
      name: "Moritz Ruth",
      short_name: "Moritz Ruth",
      background_color: "#ffffff",
      display: "browser",
      description: "The official website of Moritz Ruth",
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
