<template>
  <TopBarLayout back-target="/" title="Projects">
    <div class="max-w-160 mx-auto">
      <LinkCardList :links="projects"/>
    </div>
  </TopBarLayout>
</template>

<style module>

</style>

<script>
  import TopBarLayout from "../components/TopBarLayout.vue"
  import LinkCardList from "../components/LinkCardList.vue"

  export default {
    name: "ProjectsPage",
    components: { LinkCardList, TopBarLayout },
    setup() {
      const projects = [
        {
          label: "JamRSS",
          description: "An RSS reader app for Android, built with Jetpack\u00A0Compose.",
          href: "https://github.com/moritzruth/JamRSS#jamrss",
          icon: "🍓"
        },
        {
          label: "Status page finder",
          description: "Enter the name of a service and get a link to its status page.",
          href: "https://statuspages.moritzruth.de",
          icon: "🟢"
        },
        {
          label: "License chooser",
          description: "Helps you choose the license of your next open-source project.",
          href: "https://licenses.moritzruth.de",
          icon: "📜"
        },
        {
          label: "node-enttec-open-dmx-usb",
          description: "A Node.js library for interacting with the Enttec Open DMX USB Interface.",
          href: "https://github.com/moritzruth/node-enttec-open-dmx-usb",
          icon: "💡"
        }
      ]

      return {
        projects
      }
    }
  }
</script>
