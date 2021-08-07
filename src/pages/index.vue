<template>
  <main class="flex -md:flex-col justify-between items-start md:items-center min-h-80vh">
    <div class="relative -md:pt-20vh -md:pb-20">
      <div class="_fade-2">
        <div class="_pattern transform rotate-179.5 absolute w-full h-35 -left-4 md:-left-10 top-20vh -md:-mt-10 md:-top-15 opacity-3 md:opacity-5"/>
      </div>
      <div class="_slide">
        <div class="text-4xl sm:text-5xl -md:-mt-2 mb-10 md:mb-20 font-special" style="--delay: 0">
          Moritz Ruth
        </div>
      </div>
      <div class="text-gray-800 text-2xl sm:text-3xl">
        <ul class="asterisk-list">
          <li class="_slide" style="--delay: 400">
            {{ t("software_developer") }}
          </li>
          <li class="_slide" style="--delay: 600">
            {{ t("designer") }}
          </li>
          <li class="_slide" style="--delay: 800">
            {{ t("typography_enthusiast") }}
          </li>
        </ul>
      </div>
      <router-link class="mt-10 text-2xl sm:text-3xl block text-blue-900 _slide" style="--delay: 1000" to="/contact">
        <span class="mr-2">→</span> {{ t("contact_me") }}
      </router-link>
    </div>
    <BlurredBlobCanvas
      class="_fade-1 self-center"
      :colors="['#6577fc', '#eb34cf', '#6577fc', '#eb34cf']"
      :size="300"
      :blur="30"
      :minimum-duration="2000"
      :duration-variation="500"
      :minimum-opacity="0.2"
      :opacity-variation="0.4"
    />
  </main>
</template>

<i18n lang="yaml">
  en:
    i_am: I’m
    software_developer: software developer
    designer: web and print designer
    typography_enthusiast: typography enthusiast
    contact_me: Drop me a message!

  de:
    i_am: ""
    software_developer: Software-Entwickler
    designer: Web– und Print-Designer
    typography_enthusiast: Typographie-Enthusiast
    contact_me: Schreib mir!
</i18n>

<style scoped>
  ._pattern {
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg \
    fill='%23000000' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  ._fade-1 {
    animation: fade 2s ease-in both;
  }

  ._fade-2 {
    animation: fade 2s 1s ease-out both;
  }

  ._slide {
    --delay: 0;
    animation: slide-down 1s ease both;
    animation-delay: calc(var(--delay) * 1ms);
  }

  @screen md {
    ._slide {
      animation-delay: calc(var(--delay) * 1.4ms + 0.4s);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>

<script>
  import { useI18n } from "vue-i18n"
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"

  export default {
    name: "IndexPage",
    components: { BlurredBlobCanvas },
    setup() {
      const { t } = useI18n()
      return { t }
    }
  }
</script>
