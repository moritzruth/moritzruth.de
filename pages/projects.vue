<template>
  <div class="projects-page">
    <KNavigationBar title="Projects" background-after-scroll/>
    <div class="content">
      <h1 class="heading--1">
        Projects
      </h1>
      <GProject
        type="JavaScript library"
        title="shaped.js"
        github="moritzruth/shaped.js"
        npm="shaped.js"
      >
        Generate beautiful moving shapes using a canvas element which can for example be used for backgrounds.
        See it in action <nuxt-link class="link" to="/">on the home page</nuxt-link>.
        Every time you reload the page, it shows another variation.
      </GProject>
      <GProject
        type="App (english)"
        title="RelaxYourEyes"
        link="https://relaxyoureyes.moritz-ruth.de"
        github="moritzruth/relaxyoureyes"
      >
        A timer which reminds you to relax your eyes every 20 minutes.
      </GProject>
      <GProject
        type="App (german)"
        title="Schweredruck-Simulation"
        link="https://app.moritz-ruth.de/schweredruck-simulation"
        github="moritzruth/schweredruck-simulation"
      >
        Simulate and calculate the hydrostatic pressure in different liquids.
      </GProject>
      <GProject
        type="Website"
        title="cryptic-game.net"
        link="https://test.cryptic-game.net"
        github="cryptic-game/website/tree/vueWebsite"
      >
        I am responsible for the new (not yet released) website of the
        <a class="link" href="https://github.com/cryptic-game">Cryptic game</a>.
        (Just the website, not the game itself.)
      </GProject>
      <GProject
        type="Vue.js/Nuxt.js plugin"
        title="Kiste"
        github="moritzruth/kiste"
        npm="kiste"
      >
        A collection of UI components and styles used for example by this website.
      </GProject>
      <GProject
        type="Node.js Library"
        title="log-groups"
        github="moritzruth/log-groups"
        npm="log-groups"
      >
        A pretty console logging library for printing grouped messages with Node.js.
      </GProject>
      <GProject
        type="Node.js script"
        title="Zimmerlampe"
        github="moritzruth/zimmerlampe"
      >
        A simple script I use for controlling my Stairville CLB4 as room lamp.
      </GProject>
      <GProject
        type="Node.js library"
        title="node-enttec-open-dmx-usb"
        github="moritzruth/node-enttec-open-dmx-usb"
      >
        A Node.js library for sending DMX data through the
        <a class="link" href="https://www.enttec.co.uk/en/product/controls/dmx-usb-interfaces/open-dmx-usb/">
          Enttec Open DMX USB Interface</a>.
      </GProject>
      <GProject
        type="Configuration"
        title="eslint-config"
        github="moritzruth/eslint-config"
        npm="@moritzruth/eslint-config"
      >
        My personal ESLint configuration I use in all of my projects.
      </GProject>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar.vue";
  import GProject from "@/components/pages/projects/GProject.vue";

  export default {
    name: "ProjectsPage",
    components: { GProject, KNavigationBar }
  };
</script>
