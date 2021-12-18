import "virtual:windi.css"
import originalRoutes from "~pages"
import { createApp, FunctionalComponent } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import App from "./App.vue"
import { createHead } from "@vueuse/head"
import { pageComponentLoading } from "./store"

const routes = originalRoutes.map(route => {
  if (typeof route.component !== "function") return route
  const load = route.component as (() => Promise<FunctionalComponent>)

  return {
    ...route,
    component: async () => {
      pageComponentLoading.value = true

      const value = await load()
      pageComponentLoading.value = false

      return value
    }
  }
}) as RouteRecordRaw[]

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
