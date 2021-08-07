<template>
  <div class="sm:hidden fixed z-101 bottom-2 right-2 rounded-full backdrop-filter bg-white w-18 h-18 flex justify-center items-center shadow-lg _blur-backdrop-or-hide">
    <div
      role="button"
      aria-label="Toggle navigation menu"
      class="flex flex-col justify-evenly items-center h-10"
      @click="active = !active"
    >
      <div class="w-10 h-2px bg-black transition duration-200 transform" :style="`transform: ${active ? 'translateY(350%)' : ''} rotate(${active ? 45 : 0}deg)`"/>
      <div class="w-10 h-2px bg-black transition duration-200 transform" :style="`transform: ${active ? 'translateY(-350%)' : ''} rotate(${active ? -45 : 0}deg)`"/>
    </div>
  </div>
  <nav
    class="fixed sm:sticky top-0 z-100 w-full h-screen sm:h-20 backdrop-filter bg-white transition duration-400 _blur-backdrop-or-hide"
    :class="[scrolled && 'shadow-lg', active ? 'opacity-100' : '-sm:opacity-0 -sm:pointer-events-none']"
  >
    <div class="flex items-center justify-between h-full max-w-1200px mx-auto flex-grow -sm:flex-col px-6 sm:px-10">
      <div class="fixed transition-all duration-500" :style="{ left: blobState.x + 'px', top: blobState.y + 'px', opacity: blobState.show ? 1 : 0 }">
        <BlurredBlobCanvas
          :colors="['#eb34cf', '#818cff']"
          :opacity-variation="0"
          :minimum-opacity="0.9"
          :minimum-duration="1000"
          :duration-variation="500"
          :blur="10"
          :size="130"
          :randomness="20"
        />
      </div>
      <router-link class="uppercase font-special relative top-1 -sm:mt-20 transition duration-600 _home-link" to="/" @click="active = false">
        Moritz Ruth
      </router-link>
      <div class="flex -sm:flex-col -sm:mb-30vh justify-end items-center sm:space-x-20 -sm:space-y-10 relative">
        <router-link
          v-for="item in items"
          :key="item.to"
          :ref="item.element"
          class="lowercase text-2xl -sm:text-4xl"
          :to="item.to"
          @click="active = false"
        >
          {{ t(item.labelKey) }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<i18n lang="yaml">
  en:
    projects: Projects
    contact: Contact

  de:
    projects: Projekte
    contact: Kontakt
</i18n>

<style scoped>
  ._blur-backdrop-or-hide {
    @apply bg-opacity-90;
    backdrop-filter: blur(5px);
  }

  @supports (backdrop-filter: blur(5px)) {
    ._blur-backdrop-or-hide {
      @apply bg-opacity-70;
    }
  }

  @screen sm {
    ._home-link.router-link-active {
      opacity: 0;
      pointer-events: none;
    }
  }
</style>

<script>
  import { useWindowScroll, useWindowSize } from "@vueuse/core"
  import { computed, ref, watch, reactive } from "vue"
  import { useRoute } from "vue-router"
  import { useI18n } from "vue-i18n"
  import { useWindowScrollLock } from "../utils/useWindowScrollLock.js"
  import BlurredBlobCanvas from "./BlurredBlobCanvas.vue"

  const ITEMS = [
    // {
    //   labelKey: "projects",
    //   to: "/projects"
    // },
    {
      labelKey: "contact",
      to: "/contact"
    }
  ]

  export default {
    name: "NavigationMenu",
    components: { BlurredBlobCanvas },
    setup() {
      const { y: windowScroll } = useWindowScroll()
      const { width: windowWidth } = useWindowSize()
      const route = useRoute()
      const active = ref(false)

      useWindowScrollLock(active)

      const items = ITEMS.map(item => ({
        ...item,
        element: ref(null)
      }))

      const activeItem = computed(() => items.find(item => item.to === route.path) ?? null)
      const blobState = reactive({
        x: windowWidth / 2,
        y: 10,
        show: false
      })

      watch([windowWidth, activeItem], () => {
        if (activeItem.value === null) {
          blobState.show = false
        } else {
          const { x, width, y } = activeItem.value.element.value.$el.getBoundingClientRect()

          blobState.x = x + (width / 2) + 10
          blobState.y = y - 30
          blobState.show = true
        }
      }, { immediate: true })

      const { t } = useI18n()

      return {
        scrolled: computed(() => windowScroll.value > 0),
        blobState,
        items,
        active,
        t
      }
    }
  }
</script>
