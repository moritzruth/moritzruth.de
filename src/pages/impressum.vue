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
      {{ t("email") }}:
      <a class="text-blue-900" href="mailto:hey@m0.is">
        hey@m0.is
      </a>
    </p>
    <p class="text-sm mt-10">
      {{ t("phone") }}: +49 176 46146329<br>
      {{ t("phone-warning-1") }}<br>
      {{ t("phone-warning-2") }}<br>
      <a
        class="text-blue-700"
        href="https://byrslf.co/why-i-don-t-answer-most-phone-calls-4a71e1418854"
        target="_blank"
        rel="noopener noreferrer"
      >{{ t("phone-warning-link") }}</a>
    </p>
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

  de:
    heading: Impressum
    email: Email-Adresse
    phone-warning-1: Bitte rufe diese Nummer nicht an.
    phone-warning-2: Der einzige Grund, warum ich sie hier veröffentliche, ist, dass es das Gesetz (vielleicht) verlangt (niemand weiß es so genau).
    phone-warning-link: Warum Emails besser sind (englisch)
    phone: Telefon
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
