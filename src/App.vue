<template>
  <div class="h-100vh w-100vw text-light-100 overflow-x-hidden">
    <suspense @pending="startLoading()" @resolve="stopLoading()">
      <router-view v-slot="{ Component }">
        <suspense @pending="startLoading()" @resolve="stopLoading()">
          <component :is="Component"/>
        </suspense>
      </router-view>
    </suspense>
  </div>
  <div class="bg-background fixed top-0 left-0 right-0 bottom-0 z-100 backdrop-filter" :style="loadingOverlayStyle">
    <div class="font-bold text-light-900 text-2xl h-full w-full flex justify-center items-center overflow-hidden" :style="loadingOverlayContentStyle">
      <div>
        Loading...
      </div>
      <div
        v-for="loadingText in loadingTexts"
        :key="loadingText.x + '|' + loadingText.y"
        :style="{ top: loadingText.x + 'px', left: loadingText.y + 'px' }"
        :class="$style.loadingText"
      >
        Loading...
      </div>
    </div>
  </div>
</template>

<style module>
  html, body {
    @apply bg-background;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    font-size: 17px;
  }

  .loadingText {
    animation: fade-in-out 8s ease both;
    position: absolute;
  }

  @keyframes fade-in-out {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>

<script lang="ts">
  import { computed, ref } from "vue"
  import { useWindowSize, whenever } from "@vueuse/core"
  import { pageComponentLoading } from "./store"

  export default {
    name: "App",
    setup() {
      const loadingStartedTime = ref<null | number>(null)
      const isLoadingScreenActive = ref(false)
      const START_TRANSITION_DURATION = 300
      const START_TRANSITION_DELAY = 200
      let suspenseLoading = false

      const loadingTexts = ref<Array<{ x: number, y: number }>>([])

      const stopLoading = () => {
        if (loadingStartedTime.value === null) return

        const stop = () => {
          isLoadingScreenActive.value = false
          loadingStartedTime.value = null
          suspenseLoading = false
        }

        const timeSinceStart = Date.now() - loadingStartedTime.value

        if (timeSinceStart > START_TRANSITION_DELAY) setTimeout(stop, START_TRANSITION_DURATION - timeSinceStart)
        else stop()
      }

      const startLoading = () => {
        if (loadingStartedTime.value !== null) return
        loadingStartedTime.value = Date.now()
        isLoadingScreenActive.value = true
        loadingTexts.value = []
      }

      // Suspense @resolve is also called when the component is not async, so we don't need to handle stopping
      whenever(pageComponentLoading, () => {
        if (loadingStartedTime.value !== null) return
        loadingStartedTime.value = Date.now()
        isLoadingScreenActive.value = true
      })

      const { width, height } = useWindowSize()

      setInterval(() => {
        const start = loadingStartedTime.value
        if (start === null) return
        if (Date.now() - start > 3000) {
          if (loadingTexts.value.length > 500) loadingTexts.value = []
          loadingTexts.value = [...loadingTexts.value, { x: Math.random() * width.value, y: Math.random() * height.value }]
        }
      }, 800)

      return {
        isLoadingScreenActive,
        startLoading,
        stopLoading,
        loadingTexts,
        loadingOverlayStyle: computed(() => {
          if (isLoadingScreenActive.value) {
            return {
              "--tw-bg-opacity": 1,
              "--tw-backdrop-blur": "blur(20px)",
              transitionDelay: `${START_TRANSITION_DELAY}ms`,
              transition: `background ${START_TRANSITION_DURATION}ms ease, backdrop-filter 100ms linear`
            }
          } else {
            return {
              "--tw-bg-opacity": 0,
              "--tw-backdrop-blur": 0,
              transition: "background 500ms ease, backdrop-filter 200ms linear",
              pointerEvents: "none"
            }
          }
        }),
        loadingOverlayContentStyle: computed(() => {
          if (isLoadingScreenActive.value) {
            return {
              opacity: 1,
              transition: `opacity 2s ease-out`,
              transitionDelay: "1s"
            }
          } else {
            return {
              opacity: 0,
              transition: `opacity 100ms ease-out`,
              pointerEvents: "none"
            }
          }
        })
      }
    }
  }
</script>
