<template>
  <div class="min-h-100vh flex flex-col justify-between">
    <div class="w-full max-w-1000px mx-auto">
      <div class="bg-background bg-opacity-70 backdrop-filter backdrop-blur-sm backdrop-saturate-200 px-6 py-4 sm:py-8 text-light-900 fixed top-0 left-0 right-0 z-10
                  flex items-center justify-between">
        <div class="w-0">
          <router-link :to="backTarget" class="w-8 flex items-center group relative">
            <ArrowLeftIcon class="text-2xl"/>
            <div class="text-lg absolute left-10 opacity-0 sm:can-hover:group-hover:opacity-100 pointer-events-none transition duration-200">
              Back
            </div>
          </router-link>
        </div>
        <div class="font-bold text-xl sm:text-2xl text-center transform -translate-y-2px">
          {{ title }}
        </div>
        <div/>
      </div>
      <div class="pt-28 pb-20 px-5" v-bind="$attrs">
        <slot/>
      </div>
    </div>
    <footer class="flex justify-center opacity-50 hover:opacity-80 transition duration-400 space-x-5 pb-10">
      <router-link to="/terms">
        Terms
      </router-link>
      <router-link to="/legal-notice">
        Legal Notice
      </router-link>
    </footer>
  </div>
</template>

<style module>

</style>

<script>
  import { useHead } from "@vueuse/head"
  import ArrowLeftIcon from "~icons/ph/arrow-left"

  export default {
    name: "TopBarLayout",
    components: { ArrowLeftIcon },
    inheritAttrs: false,
    props: {
      backTarget: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      noSetTitle: Boolean
    },
    setup(props) {
      if (!props.noSetTitle) useHead({
        title: `${props.title} — Moritz Ruth`
      })
    }
  }
</script>
