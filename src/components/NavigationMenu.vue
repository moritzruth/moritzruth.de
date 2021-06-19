<template>
  <div class="sm:hidden fixed z-101 bottom-3 right-3 rounded-full backdrop-filter backdrop-blur-20 bg-white bg-opacity-20 w-20 h-20 flex justify-center items-center shadow-lg">
    <div role="button" class="flex flex-col justify-evenly items-center h-10" @click="active = !active">
      <div class="w-10 h-2px bg-black transition duration-200 transform" :style="`transform: ${active ? 'translateY(350%)' : ''} rotate(${active ? 45 : 0}deg)`"/>
      <div class="w-10 h-2px bg-black transition duration-200 transform" :style="`transform: ${active ? 'translateY(-350%)' : ''} rotate(${active ? -45 : 0}deg)`"/>
    </div>
  </div>
  <nav
    class="fixed sm:sticky top-0 z-100 w-screen h-screen sm:h-20 backdrop-filter backdrop-blur-40 bg-white bg-opacity-40 transition duration-200"
    :class="[scrolled && 'shadow-lg', active ? 'opacity-100' : '-sm:opacity-0 -sm:pointer-events-none']"
  >
    <div class="flex items-center justify-between h-full max-w-1200px mx-auto flex-grow -sm:flex-col px-6 sm:px-10">
      <div class="fixed transition-all duration-500" :style="{ left: blobState.x + 'px', top: blobState.y + 'px', opacity: blobState.show ? 1 : 0 }">
        <BlurredBlobCanvas
          :colors="['#eb34cf', '#79faff']"
          :opacity-variation="0"
          :minimum-opacity="0.9"
          :minimum-duration="1000"
          :duration-variation="500"
          :blur="10"
          :size="100"
        />
      </div>
      <router-link class="uppercase font-special relative top-1 -sm:mt-20" to="/" @click="active = false">
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
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import { useWindowScroll, useWindowSize } from "@vueuse/core"
  import { computed, ref, watch, reactive } from "vue"
  import { useRoute } from "vue-router"
  import { useWindowScrollLock } from "../utils/useWindowScrollLock.js"
  import BlurredBlobCanvas from "./BlurredBlobCanvas.vue"

  const ITEMS = [
    {
      label: "Projects",
      to: "/projects"
    },
    {
      label: "Contact",
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
        y: 20,
        show: false
      })

      watch([windowWidth, activeItem], () => {
        if (activeItem.value === null) {
          blobState.show = false
        } else {
          const { x, width, y } = activeItem.value.element.value.$el.getBoundingClientRect()

          blobState.x = x + (width / 2) - 20
          blobState.y = y - 20
          blobState.show = true
        }
      }, { immediate: true })

      return {
        scrolled: computed(() => windowScroll.value > 0),
        blobState,
        items,
        active
      }
    }
  }
</script>
