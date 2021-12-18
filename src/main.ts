import "virtual:windi.css"
import originalRoutes from "~pages"
import { FunctionalComponent } from "vue"
import { RouteRecordRaw } from "vue-router"
import App from "./App.vue"
import { pageComponentLoading } from "./store"
import { ViteSSG } from "vite-ssg"

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

// noinspection JSUnusedGlobalSymbols
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash }
      return { top: 0 }
    }
  },
  () => {

  }
)
