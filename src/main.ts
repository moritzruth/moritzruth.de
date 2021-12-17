import "virtual:windi.css"
import routes from "~pages"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import { createHead } from "@vueuse/head"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
})

const head = createHead()

createApp(App)
  .use(router)
  .use(head)
  .mount("#app")
