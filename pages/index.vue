<template>
  <div class="h-100vh w-full max-w-[1200px] mx-auto flex justify-between -lg:flex-col p-5 sm:p-10">
    <section class="relative pt-20">
      <div class="absolute top-60 -left-20 lg:-left-10">
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
      <div class="relative max-w-130 p-2 lg:pl-10">
        <div class="font-extrabold text-3xl sm:text-4xl">
          Moritz Ruth
        </div>
        <div class="text-lg sm:text-xl font-medium leading-8 pt-5">
          <p>
            I’m&nbsp;a&nbsp;freelance
            <router-link to="/projects" :class="$style.link">software&nbsp;developer</router-link>,
            graphic&nbsp;design&nbsp;enthusiast&nbsp;and
            <router-link to="/photography" :class="$style.link">hobby&nbsp;photographer</router-link>
            from&nbsp;Europe.
          </p>
          <XSpacer v="5"/>
          <p>
            I&nbsp;primarily&nbsp;focus&nbsp;on
            Web&nbsp;and&nbsp;Android&nbsp;development,
            but&nbsp;I&nbsp;also&nbsp;do&nbsp;Backend&nbsp;sometimes.
          </p>
        </div>
        <XSpacer v="10"/>
        <router-link to="/contact" :class="$style.reachOut">Reach out</router-link>
      </div>
    </section>
    <section class="relative lg:pr-20 pt-20 pb-10 mt-0">
      <div class="absolute w-full pt-20 flex justify-center">
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
      </div>
      <div class="relative flex flex-col justify-center space-y-4">
        <router-link
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="px-5 sm:px-6 py-4 bg-light-300 bg-opacity-5 rounded-lg backdrop-blur-lg flex
          hover:bg-opacity-10 focus-visible:bg-opacity-10 transform hover:scale-104 transition duration-200 group"
        >
          <div class="flex items-center justify-center text-xl sm:text-2xl relative pr-3 sm:pr-5" :class="link.emojiClasses">
            {{ link.emoji }}
          </div>
          <div class="flex-grow">
            <div class="text-lg font-bold">{{ link.label }}</div>
            <div class="opacity-60 -sm:text-sm">{{ link.text }}</div>
          </div>
        </router-link>
      </div>
    </section>
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
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"
  import XSpacer from "../components/XSpacer.vue"

  const NAVIGATION_LINKS = [
    {
      emoji: "📝",
      to: "/blog",
      label: "Blog",
      text: "My thoughts, mostly on dev things"
    },
    {
      emoji: "✨",
      to: "/projects",
      label: "Projects",
      text: "Apps and open-source projects"
    },
    {
      emojiClasses: "top-[-0.25rem]",
      emoji: "📷",
      to: "/photography",
      label: "Photography",
      text: "Some photos I’m proud of"
    },
    {
      emoji: "💬",
      to: "/contact",
      label: "Contact me",
      text: "Email, Matrix, Twitter"
    }
  ]

  export default {
    name: "IndexPage",
    components: {
      XSpacer,
      BlurredBlobCanvas
    },
    setup() {
      return {
        navigationLinks: NAVIGATION_LINKS
      }
    }
  }
</script>
