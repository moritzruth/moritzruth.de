<template>
  <TopBarLayout title="Photography" back-target="/">
    <div class="flex flex-col space-y-30 lg:space-y-20">
      <div
        v-for="photo in photos"
        :key="photo.file"
        class="flex -lg:space-y-10 lg:space-x-10 -lg:flex-col -lg:items-center"
      >
        <img
          :src="photo.file"
          :alt="photo.title"
          class="w-full lg:max-w-150 max-h-80vh block object-contain"
        >
        <div>
          <div class="uppercase opacity-70 text-sm pt-1">
            {{ photo.date }}
          </div>
          <div class="font-bold text-2xl opacity-90">
            {{ photo.title }}
          </div>
          <div class="opacity-90 max-w-100 space-y-1 pt-4 whitespace-pre-line">
            {{ photo.description }}
          </div>
        </div>
      </div>
    </div>
  </TopBarLayout>
</template>

<style module>

</style>

<script lang="ts">
  import TopBarLayout from "../components/TopBarLayout.vue"
  import { photos } from "assets/photos"
  import XSpacer from "~/components/XSpacer.vue"

  export default {
    name: "PhotographyPage",
    components: { XSpacer, TopBarLayout },
    setup() {
      return {
        photos
      }
    }
  }
</script>
