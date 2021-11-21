<template>
  <main class="prose pt-20">
    <h1>{{ t("heading") }}</h1>
    <p v-if="!isGerman">
      <i>As required by German law.</i>
    </p>
    <p>
      {{ t("scope") }}
    </p>
    <h2>{{ t("according") }}</h2>
    <address>
      Moritz Ruth<br>
      Zum Galgenberg 19<br>
      66539 Neunkirchen
    </address>
    <p>
      {{ t("email") }}:
      <a class="text-blue-900" href="mailto:hey@deltaa.xyz">
        hey@deltaa.xyz
      </a>
    </p>
    <p>
      {{ t("matrix") }}:
      <ExternalLink href="https://moritzruth.de/matrix">
        @moritz:moritzruth.de
      </ExternalLink>
    </p>
    <h2 class="text-2xl text-blue-500 mt-20">{{ t("typefaces-used") }}</h2>
    <ul>
      <li>
        <ExternalLink href="https://gitlab.com/bonjour-monde/fonderie/syne-typeface">
          Syne
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://tokotype.github.io/plusjakarta-sans/">
          +Jakarta Sans
        </ExternalLink>
      </li>
    </ul>
  </main>
</template>

<i18n lang="yaml">
  en:
    heading: Legal Notice
    scope: The declarations on this page apply to this website (moritzruth.de) and all websites which reside under subdomains of moritzruth.de.
    according: Information pursuant to § 5 TMG
    email: Email address
    typefaces-used: Typefaces used on this site
    matrix: Matrix

  de:
    heading: Impressum
    scope: Dieses Impressum gilt für diese Website (moritzruth.de) und alle Websites, welche unter Subdomains von moritzruth.de erreichbar sind.
    according: Angaben gemäß § 5 TMG
    email: Email-Adresse
    typefaces-used: Typefaces auf dieser Seite
    matrix: Matrix
</i18n>

<script>
  import { useI18n } from "vue-i18n"
  import { computed } from "vue"
  import ExternalLink from "../components/ExternalLink.vue"

  export default {
    name: "LegalNoticePage",
    components: { ExternalLink },
    setup() {
      const { locale, t } = useI18n()

      return {
        isGerman: computed(() => locale.value.startsWith("de")),
        t
      }
    }
  }
</script>
