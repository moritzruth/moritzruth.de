<template>
  <div class="prose pt-20 flex items-center justify-center flex-col h-50vh">
    <h1 class="text-center">
      {{ t("heading") }}
    </h1>
    <p class="mt-10">
      <router-link to="/" class="text-blue-700">
        {{ t("back") }}
      </router-link>
    </p>
  </div>
</template>

<i18n lang="yaml">
  en:
    heading: This page does not exist.
    back: Back to home
    cat: Show me a picture of a cat

  de:
    heading: Diese Seite existiert nicht.
    cat: Zeig mir ein Bild einer Katze
    back: Zurück zur Startseite
</i18n>

<script>
  import { useI18n } from "vue-i18n"
  import ExternalLink from "../components/ExternalLink.vue"

  export default {
    name: "NotFoundPage",
    components: { ExternalLink },
    setup() {
      const { t } = useI18n()

      return {
        t
      }
    }
  }
</script>
