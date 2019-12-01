<template>
  <div class="legal-notice-page">
    <NavigationBar show-background title="Legal Notice"/>
    <h1 class="heading--1">
      Legal Notice
    </h1>
    <h2 class="heading--3">
      Diensteanbieter
    </h2>
    <p class="paragraph">
      Moritz Ruth<br>
      Zum Galgenberg 19<br>
      66539 Neunkirchen<br>
      Deutschland
    </p>
    <h2 class="heading--3">
      Kontaktmöglichkeiten
    </h2>
    <p class="paragraph">
      <b>Telefon</b>: +49 176 46146329
    </p>
    <p class="paragraph">
      <b>E-Mail</b>: <a class="link" href="mailto:legal@moritz-ruth.de">legal@moritz-ruth.de</a>
    </p>
    <h2 class="heading--3">
      Haftungs- und Urheberrechtshinweise
    </h2>
    <p class="paragraph">
      <b>Haftungsausschluss</b>:
      Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand
      erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht
      um gesetzlich verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder
      Widerrufsbelehrungen für Verbraucher) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu
      ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und
      unverbindlich.
    </p>
    <p class="paragraph">
      <b>Links auf fremde Webseiten</b>:
      Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen
      außerhalb unseres Verantwortungsbereiches und machen wir uns nicht zu Eigen. Für alle Inhalte und insbesondere für
      Schäden, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, haftet allein
      der Anbieter der verlinkten Webseiten.
    </p>
    <p class="paragraph">
      <b>Urheberrechte und Markenrechte</b>:
      Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken,
      Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die
      Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber bzw.
      Rechteverwalter.
    </p>
    <p class="paragraph">
      <b>Hinweise auf Rechtsverstöße</b>:
      Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße bemerken, bitten wir
      Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich
      entfernen.
    </p>
    <a
      class="link"
      href="https://datenschutz-generator.de/?l=de"
      rel="noopener"
      title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
      target="_blank"
    >Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import NavigationBar from "@/components/NavigationBar";

  export default {
    name: "LegalNoticePage",
    components: { NavigationBar }
  };
</script>
