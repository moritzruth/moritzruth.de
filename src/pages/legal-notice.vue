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
    <h2>Haftung für Links</h2>
    <p>
      Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
      Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
    </p>
    <p>
      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
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
