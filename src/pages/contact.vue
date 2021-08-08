<template>
  <main class="text-2xl sm:text-3xl pt-26">
    <h1 class="font-bold text-3xl sm:text-5xl text-gray-900 mb-10">{{ t("heading") }}</h1>
    <p>
      {{ t("you_want") }}
    </p>
    <ul class="asterisk-list mt-5">
      <li>{{ t("develop_website") }}</li>
      <li>{{ t("design_print") }}</li>
      <li>{{ t("program_tool") }}</li>
      <li>{{ t("else") }}</li>
    </ul>
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
    <p>
      <a class="text-blue-900 text-4xl" href="mailto:hey@deltaa.xyz">
        <span class="mr-2 relative bottom-2px">→</span> hey@deltaa.xyz
      </a>
    </p>
    <p class="mt-10 mb-10">
      {{ t("happy_to_hear") }}
    </p>
  </main>
</template>

<i18n lang="yaml">
  en:
    heading: Contact
    you_want: Want me to …
    develop_website: develop your website,
    design_print: design a poster, brochure or business card,
    program_tool: program a tool or
    else: do something else which you think I can do?
    twitter: Hit me up on Twitter
    or_email: "or send me an email (en/de):"
    happy_to_hear: I'm looking forward to your message.

  de:
    heading: Kontakt
    you_want: Willst du, dass ich …
    develop_website: deine Webseite entwickle,
    design_print: ein Poster, eine Broschüre oder eine Visitenkarte designe,
    program_tool: ein Tool programmiere oder
    else: etwas anderes tue, von dem du denkst, dass ich es kann?
    twitter: Schreib mir auf Twitter
    or_email: "oder schicke mir eine Email:"
    happy_to_hear: Ich freue mich auf deine Nachricht.
</i18n>

<script>
  import { useI18n } from "vue-i18n"

  export default {
    name: "ContactPage",
    setup() {
      const { t } = useI18n()
      return { t }
    }
  }
</script>
