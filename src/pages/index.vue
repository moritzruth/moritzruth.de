<template>
  <div class="min-h-100vh w-full flex flex-col items-center justify-between">
    <div class="w-full max-w-1200px flex justify-between -lg:flex-col p-5 sm:p-10 lg:pt-25vh">
      <div class="relative">
        <div class="absolute top-40 -left-20 lg:-left-10">
          <BlurredBlobCanvas
            :blur="30"
            :size="300"
            :randomness="80"
            :minimum-duration="600"
            :duration-variation="400"
            :minimum-opacity="0.2"
            :opacity-variation="0.5"
            :colors="['#eb34cf', '#6577fc']"
          />
        </div>
        <main class="relative max-w-130 p-2 -lg:pt-20 lg:pl-10">
          <div class="font-bold font-special text-3xl sm:text-4xl">
            Moritz Ruth
          </div>
          <div class="text-lg sm:text-xl font-medium leading-8 pt-5">
            <p>
              I’m&nbsp;a&nbsp;freelance
              software&nbsp;developer,
              graphic&nbsp;design&nbsp;enthusiast&nbsp;and
              <router-link to="/photography" :class="$style.link">hobby&nbsp;photographer</router-link>
              from&nbsp;Europe.
            </p>
          </div>
          <XSpacer v="10"/>
          <router-link to="/contact" :class="$style.reachOut">Reach out</router-link>
        </main>
      </div>
      <div class="relative lg:pr-20 -lg:pt-20 pb-10 mt-0">
        <nav class="absolute w-full pt-20 flex justify-center">
          <BlurredBlobCanvas
            :blur="30"
            :size="300"
            :randomness="100"
            :minimum-duration="3000"
            :duration-variation="1000"
            :minimum-opacity="0.4"
            :opacity-variation="0"
            :colors="['#eb34cf', '#6577fc']"
          />
        </nav>
        <LinkCardList :links="navigationLinks"/>
      </div>
    </div>
    <footer class="flex justify-center opacity-30 hover:opacity-60 transition duration-400 space-x-5 pb-10">
      <router-link to="/legal-notice">
        Legal Notice
      </router-link>
    </footer>
  </div>
</template>

<style module>
  .link {
    background: linear-gradient(to bottom right, rgba(235, 52, 207, 0.5), rgba(101, 119, 252, 0.5));
    background-size: 200% 200%;
    animation: gradient 3s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0 51%
    }

    50% {
      background-position: 100% 50%
    }

    100% {
      background-position: 0 51%
    }
  }

  .reachOut {
    @apply text-xl font-bold rounded-md bg-pink-900 px-5 py-2;
    mix-blend-mode: color-dodge;
    box-shadow: 0 2px 10px 0 rgba(112, 26, 117, 0.8);
  }
</style>

<script>
  import { useHead } from "@vueuse/head"
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"
  import XSpacer from "../components/XSpacer.vue"
  import LinkCardList from "../components/LinkCardList.vue"

  const NAVIGATION_LINKS = [
    // {
    //   icon: "📝",
    //   to: "/blog",
    //   label: "Blog",
    //   description: "My thoughts, mostly on dev things"
    // },
    {
      iconClasses: "top-[-0.25rem]",
      icon: "📷",
      to: "/photography",
      label: "Photography",
      description: "Some photos I’m proud of"
    },
    {
      icon: "💬",
      to: "/contact",
      label: "Contact me",
      description: "Email, Matrix"
    }
  ]

  export default {
    name: "IndexPage",
    components: {
      LinkCardList,
      XSpacer,
      BlurredBlobCanvas
    },
    setup() {
      useHead({
        title: "Moritz Ruth — freelance software developer"
      })

      return {
        navigationLinks: NAVIGATION_LINKS
      }
    }
  }
</script>
