<template>
  <main class="prose pt-20">
    <h1>{{ t("heading") }}</h1>
    <p v-if="!isGerman">
      <i>As required by German law.</i>
    </p>
    <p>
      Dieses Impressum gilt für diese Webseite (moritzruth.de) und alle Webseiten, welche unter Subdomains von moritzruth.de erreichbar sind.
    </p>
    <h2>Angaben gemäß § 5 TMG</h2>
    <address>
      Moritz Ruth<br>
      Zum Galgenberg 19<br>
      66539 Neunkirchen
    </address>
    <p>
      E-Mail-Adresse:
      <a class="text-blue-900" href="mailto:hey@m0.is">
        hey@m0.is
      </a>
    </p>
  </main>
</template>

<i18n lang="yaml">
  en:
    heading: Legal Notice

  de:
    heading: Impressum
</i18n>

<script>
  import { useI18n } from "vue-i18n"
  import { computed } from "vue"

  export default {
    name: "LegalNoticePage",
    setup() {
      const { locale, t } = useI18n()

      return {
        isGerman: computed(() => locale.value.startsWith("de")),
        t
      }
    }
  }
</script>
