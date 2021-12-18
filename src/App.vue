<template>
  <div class="h-100vh w-100vw text-light-100 overflow-x-hidden">
    <router-view v-slot="{ Component }">
      <suspense @pending="startLoading()" @resolve="stopLoading()">
        <!-- The key makes that components are not reused if only params changed -->
        <component :is="Component" :key="$route.fullPath"/>
      </suspense>
    </router-view>
  </div>
  <div class="bg-background fixed top-0 left-0 right-0 bottom-0 z-100 backdrop-filter" :style="loadingOverlayStyle">
    <div class="font-bold text-light-900 text-2xl h-full w-full flex justify-center items-center overflow-hidden" :style="loadingOverlayContentStyle">
      <div :class="$style.centerLoadingText">
        Loading...
      </div>
      <div
        v-for="loadingText in loadingTexts"
        :key="loadingText.x + '|' + loadingText.y"
        :style="{ top: loadingText.x + 'px', left: loadingText.y + 'px' }"
        class="absolute"
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
  }

  .centerLoadingText {
    animation: fade-in 2s ease-out both;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loadingText {
    animation: fade-in-out 8s ease both;
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
  import { useIntervalFn, useWindowSize, whenever } from "@vueuse/core"
  import { useRouter } from "vue-router"
  import { useHead } from "@vueuse/head"
  import { pageComponentLoading } from "./store"
  import { getKeywordsTagWithBase } from "./data"

  export default {
    name: "App",
    setup() {
      useHead({
        meta: [
          getKeywordsTagWithBase([])
        ]
      })

      const loadingStartedTime = ref<null | number>(null)
      const isLoadingScreenActive = ref(false)
      const START_TRANSITION_DURATION = 200
      const START_TRANSITION_DELAY = 0

      const loadingTexts = ref<Array<{ x: number; y: number }>>([])

      const stopLoading = () => {
        isLoadingScreenActive.value = false
        loadingStartedTime.value = null
      }

      const startLoading = () => {
        if (loadingStartedTime.value !== null) return
        loadingStartedTime.value = Date.now()
        isLoadingScreenActive.value = true
        loadingTexts.value = []
      }

      // Suspense @resolve is also called when the component is not async, so we don't need to handle stopping
      whenever(pageComponentLoading, () => {
        // Runs when a page component is imported
        startLoading()
      })

      const router = useRouter()
      let isFirst = true

      router.beforeResolve((to, from, next) => {
        if (isFirst) {
          isFirst = false
          next()
          return
        }

        startLoading()
        setTimeout(next, START_TRANSITION_DURATION)
      })

      const { width, height } = useWindowSize()

      useIntervalFn(() => {
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
              "transitionDelay": `${START_TRANSITION_DELAY}ms`,
              "transition": `background ${START_TRANSITION_DURATION}ms ease, backdrop-filter 100ms linear`
            }
          }
          return {
            "--tw-bg-opacity": 0,
            "--tw-backdrop-blur": 0,
            "transition": "background 200ms ease, backdrop-filter 200ms linear",
            "pointerEvents": "none"
          }
        }),
        loadingOverlayContentStyle: computed(() => {
          if (isLoadingScreenActive.value) {
            return {
              opacity: 1,
              transition: "opacity 2s ease-out",
              transitionDelay: "1s"
            }
          }
          return {
            opacity: 0,
            transition: "opacity 100ms ease-out",
            pointerEvents: "none"
          }
        })
      }
    }
  }
</script>
