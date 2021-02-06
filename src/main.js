import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

if (window.location.path !== "/") history.replaceState({}, "", "/")
