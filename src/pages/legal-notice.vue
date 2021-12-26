<template>
  <TopBarLayout title="Legal notice" back-target="/">
    <Prose>
      <section class="intro">
        <p>
          This legal notice (Impressum) is a requirement of the German Act for Telemedia&nbsp;Services (Telemediengesetz).
        </p>
        <p>
          The declarations on this page only apply to this website (moritzruth.de) and all websites which reside under subdomains of moritzruth.de.
        </p>
      </section>
      <section>
        <h2>
          Information pursuant to § 5 TMG
        </h2>
        <address>
          Moritz Ruth<br>
          Zum Galgenberg 19<br>
          66539 Neunkirchen
        </address>
        <p>
          Email address: <a href="mailto:legal@moritzruth.de">legal@moritzruth.de</a>
        </p>
        <p>
          Matrix: <a href="https://moritzruth.de/matrix">@moritz:deltaa.xyz</a>
        </p>
      </section>
    </Prose>
  </TopBarLayout>
</template>

<style module>

</style>

<script>
  import TopBarLayout from "../components/TopBarLayout.vue"
  import Prose from "../components/Prose.vue"

  export default {
    name: "TermsPage",
    components: { Prose, TopBarLayout }
  }
</script>
