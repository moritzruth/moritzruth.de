<template>
  <div class="prose pt-20">
    <h1>{{ t("heading") }}</h1>
    <p>{{ t("message") }}</p>
  </div>
</template>

<i18n lang="yaml">
  en:
    message: Not yet available.
    heading: Terms and Conditions

  de:
    message: Noch nicht verfügbar.
    heading: Allgemeine Geschäftsbedingungen
</i18n>

<script>
  import { useI18n } from "vue-i18n"

  export default {
    name: "TermsAndConditionsPage",
    setup() {
      const { t } = useI18n()

      return { t }
    }
  }
</script>
