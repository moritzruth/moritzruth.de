<template>
  <main class="prose pt-20">
    <h1>{{ t("heading") }}</h1>
    <p v-if="!isGerman">
      <i>As required by German law.</i>
    </p>
    <p>
      Dieses Impressum gilt für diese Website (moritzruth.de) und alle Websites, welche unter Subdomains von moritzruth.de erreichbar sind.
    </p>
    <h2>Angaben gemäß § 5 TMG</h2>
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
    <p class="text-sm">
      {{ t("phone") }}: +49 176 46146329<br>
      {{ t("phone-warning-1") }}<br>
      {{ t("phone-warning-2") }}<br>
      <ExternalLink href="https://byrslf.co/why-i-don-t-answer-most-phone-calls-4a71e1418854">
        {{ t("phone-warning-link") }}
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
    email: Email address
    phone-warning-1: Please do not call this number.
    phone-warning-2: The only reason I publish it is because the law may require doing so (noone knows).
    phone-warning-link: Why emails are better
    phone: Tel
    typefaces-used: Typefaces used on this site

  de:
    heading: Impressum
    email: Email-Adresse
    phone-warning-1: Bitte rufe diese Nummer nicht an.
    phone-warning-2: Der einzige Grund, warum ich sie hier veröffentliche, ist, dass es das Gesetz (vielleicht) verlangt (niemand weiß es so genau).
    phone-warning-link: Warum Emails besser sind (englisch)
    phone: Telefon
    typefaces-used: Typefaces auf dieser Seite
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
