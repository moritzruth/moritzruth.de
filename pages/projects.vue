<template>
  <div class="projects-page">
    <KNavigationBar title="Projects"/>
    <div class="content">
      <h1 class="heading--1">
        Projects
      </h1>
      <GProject
        type="App"
        title="RelaxYourEyes"
        link="https://relaxyoureyes.moritz-ruth.de"
        github="moritzruth/relaxyoureyes"
      >
        A timer which reminds you to relax your eyes every 20 minutes.
      </GProject>
      <GProject
        type="Website"
        title="cryptic-game.net"
        link="https://test.cryptic-game.net"
        github="cryptic-game/website/tree/vueWebsite"
      >
        I am responsible for the new (not yet released) website of the
        <a class="link" href="https://github.com/cryptic-game">Cryptic game</a>.
        (Just the website, not the game itself)
      </GProject>
      <GProject
        type="Node.js Library"
        title="log-groups"
        github="moritzruth/log-groups"
        npm="log-groups"
      >
        A pretty console logging library for printing grouped messages with Node.js.
      </GProject>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar";
  import GProject from "@/components/pages/projects/GProject";

  export default {
    name: "ProjectsPage",
    components: { GProject, KNavigationBar }
  };
</script>
