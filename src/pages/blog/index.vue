<template>
  <TopBarLayout title="Blog" back-target="/">
    <div class="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <BlurredBlobCanvas
        :blur="70"
        :size="500"
        :randomness="400"
        :minimum-duration="3000"
        :duration-variation="1000"
        :minimum-opacity="0.4"
        :opacity-variation="0"
        :colors="['#eb34cf', '#6577fc']"
      />
    </div>
    <div class="flex flex-col space-y-8 max-w-120 mx-auto">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="bg-light-300 bg-opacity-5 rounded-lg backdrop-blur-lg cursor-pointer hover:bg-opacity-10 focus-visible:bg-opacity-10 transform hover:scale-104
             transition duration-200 p-5 sm:p-7 flex flex-col overflow-hidden"
      >
        <div class="font-bold text-xl">
          {{ post.title }}
        </div>
        <XSpacer v="2"/>
        <div class="text-lg">
          {{ post.description }}
        </div>
        <XSpacer v="3"/>
        <div class="font-bold text-sm flex justify-between">
          <div>
            Published at {{ new Date(post.published_at).toLocaleDateString() }}
          </div>
          <div>
            {{ post.reading_time_minutes }} minute{{ post.reading_time_minutes === 1 ? "" : "s" }}
          </div>
        </div>
      </router-link>
    </div>
  </TopBarLayout>
</template>

<style module>

</style>

<script lang="ts">
  import TopBarLayout from "../../components/TopBarLayout.vue"
  import { getPosts } from "../../posts"
  import XSpacer from "../../components/XSpacer.vue"
  import BlurredBlobCanvas from "../../components/BlurredBlobCanvas.vue"

  export default {
    name: "BlogIndexPage",
    components: { BlurredBlobCanvas, XSpacer, TopBarLayout },
    async setup() {
      const posts = await getPosts()

      return {
        posts: [...posts, ...posts, ...posts]
      }
    }
  }
</script>
