<template>
  <div class="projects-page">
    <NavigationBar show-background title="Projects"/>
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
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import NavigationBar from "@/components/NavigationBar";
  import GProject from "@/components/pages/projects/GProject";

  export default {
    name: "ProjectsPage",
    components: { GProject, NavigationBar }
  };
</script>
