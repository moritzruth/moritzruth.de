<template>
  <NotFoundPage v-if="post === null" object-name="post" back-target="/blog"/>
  <TopBarLayout v-else title="Blog" back-target="/blog">
    <article>
      <h1 class="font-bold text-3xl sm:text-3xl sm:text-center font-special">
        {{ post.title }}
      </h1>
      <XSpacer v="4"/>
      <div class="flex justify-center -sm:flex-col -sm:space-y-1 -sm:pt-2 sm:space-x-3 text-sm sm:text-base">
        <div>
          Published at {{ post.published_at.slice(0, 10) }}
        </div>
        <div class="-sm:hidden">
          |
        </div>
        <div>
          Reading time: {{ post.reading_time_minutes }} minute{{ post.reading_time_minutes === 1 ? "" : "s" }}
        </div>
      </div>
      <XSpacer v="8"/>
      <Prose v-html="html"/>
    </article>
  </TopBarLayout>
</template>

<style module>

</style>

<script lang="ts">
  import { useRoute } from "vue-router"
  import { getPostBySlug } from "../posts"
  import TopBarLayout from "./TopBarLayout.vue"
  import Prose from "./Prose.vue"
  import XSpacer from "./XSpacer.vue"
  import NotFoundPage from "./NotFoundPage.vue"

  export default {
    name: "BlogPostPageContent",
    components: { NotFoundPage, XSpacer, Prose, TopBarLayout },
    async setup() {
      const route = useRoute()
      const post = await getPostBySlug(route.params.slug as string)

      return {
        post,
        // Yep, that's awful code
        html: post?.body_html?.replaceAll("h2>", "h3>")?.replaceAll("h1>", "h2>")
      }
    }
  }
</script>
