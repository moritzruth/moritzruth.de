import "./main.css"
import "virtual:windi.css"
import routes from "virtual:generated-pages"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createI18n } from "vue-i18n"
import App from "./App.vue"

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
  locale: navigator.language
})

document.documentElement.lang = navigator.language.startsWith("de") ? "de" : "en"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app")
