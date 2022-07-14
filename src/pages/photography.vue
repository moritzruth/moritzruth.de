<template>
  <TopBarLayout title="Photography" back-target="/">
    <div class="flex flex-col space-y-30 lg:space-y-20">
      <div
        v-for="photo in photos"
        :key="photo.file"
        class="flex -lg:space-y-10 lg:space-x-10 -lg:flex-col -lg:items-center"
      >
        <a class="lg:max-w-150 block w-full" :href="`/photography/${photo.file}`">
          <SuspendingImage
            :src="`/photography/${photo.file}`"
            :alt="photo.altText"
            class="w-full max-h-80vh block object-contain"
          />
        </a>
        <div>
          <div class="text-gray-400">
            {{ photo.date }}
          </div>
          <div class="font-bold text-2xl text-light-500 font-special">
            {{ photo.title }}
          </div>
          <div class="opacity-90 max-w-100 space-y-1 pt-3 whitespace-pre-line text-light-600 text-lg">
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
  import { photos } from "../data"
  import SuspendingImage from "../components/SuspendingImage.vue"

  export default {
    name: "PhotographyPage",
    components: { SuspendingImage, TopBarLayout },
    setup() {
      return {
        photos
      }
    }
  }
</script>
