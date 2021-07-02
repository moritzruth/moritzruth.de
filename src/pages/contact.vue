<template>
  <main class="text-2xl sm:text-3xl pt-26">
    <h1 class="font-bold text-3xl sm:text-5xl text-gray-900 mb-10">{{ t("heading") }}</h1>
<!--    <p>-->
<!--      {{ t("you_want") }}-->
<!--    </p>-->
<!--    <ul class="asterisk-list mt-5">-->
<!--      <li>{{ t("develop_website") }}</li>-->
<!--      <li>{{ t("program_tool") }}</li>-->
<!--      <li>{{ t("design_print") }}</li>-->
<!--      <li>{{ t("help_server") }}</li>-->
<!--    </ul>-->
    <p class="mt-10 mb-10">
      {{ t("twitter") }}
      <a
        class="text-blue-900"
        href="https://twitter.com/moritz_ruth"
        target="_blank"
        rel="noopener noreferrer"
      >
        @moritz_ruth
      </a>
      {{ t("or_email") }}
    </p>
    <div class="relative text-4xl group inline-block">
      <BlurredBlobCanvas
        class="absolute -top-10 left-22 pointer-events-none transition duration-400 opacity-0 group-hover:opacity-80"
        :colors="['#818cff']"
        :size="120"
        :blur="20"
        :minimum-duration="500"
        :minimum-opacity="0.6"
        :opacity-variation="0.4"
      />
      →
      <a class="text-blue-900 relative ml-2" href="mailto:hey@m0.is">
        hey@m0.is
      </a>
    </div>
    <p class="mt-10 mb-10">
      {{ t("happy_to_hear") }}
    </p>
    <p class="mt-10 text-lg">
      {{ t("disclaimer") }}
    </p>
  </main>
</template>

<i18n lang="yaml">
  en:
    heading: Contact
    you_want: Want me to …
    develop_website: develop your website (€ 1000),
    program_tool: program a tool (€ 500),
    design_print: design a poster, brochure or business card (€ 500),
    help_server: help you with your server or domain (€ 300)?
    twitter: Hit me up on Twitter
    or_email: "or send me an email (en/de):"
    happy_to_hear: I’m always happy to hear from you.
    disclaimer: The prices listed above are not meant to be understood as a binding offer.

  de:
    heading: Kontakt
    you_want: Willst du, dass ich …
    develop_website: deine Webseite entwickle (€ 1000),
    program_tool: ein Tool programmiere (€ 500),
    design_print: ein Poster, eine Broschüre oder eine Visitenkarte designe (€ 500),
    help_server: dir mit deinem Server oder deiner Domain helfe (€ 300)?
    twitter: Schreib mir auf Twitter
    or_email: "oder sende mir eine Email:"
    happy_to_hear: Ich freue mich auf deine Nachricht.
    disclaimer: Die genannten Preise stellen kein verbindliches Angebot dar.
</i18n>

<script>
  import { useI18n } from "vue-i18n"
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"

  export default {
    name: "ContactPage",
    components: { BlurredBlobCanvas },
    setup() {
      const { t } = useI18n()
      return { t }
    }
  }
</script>
