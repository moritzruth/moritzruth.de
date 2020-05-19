<template>
  <div class="projects-page">
    <NavigationBar title="Projects"/>
    <main class="content">
      <h1 class="heading--1 projects-page__heading">
        Projects
      </h1>
      <div class="projects-page__projects">
        <MyProject
          title="shaped.js"
          kind="JavaScript Library"
          github="moritzruth/shaped.js"
          npm="shaped.js"
        >
          Generate amazing animated backgrounds using only a canvas element.
          <nuxt-link to="/" class="link">See it in action on the home page.</nuxt-link>
        </MyProject>
        <MyProject
          title="Schweredruck-Simulation"
          kind="Web App (german)"
          github="moritzruth/schweredruck-simulation"
          url="https://app.moritzruth.de/schweredruck-simulation/"
        >
          Calculate and visualize the hydrostatic pressure in different liquids.
        </MyProject>
        <MyProject
          title="log-groups"
          kind="Node.js Package"
          github="moritzruth/log-groups"
          npm="log-groups"
        >
          Print console log messages in groups.
        </MyProject>
        <MyProject
          title="node-enttec-open-dmx-usb"
          kind="Node.js Package"
          github="moritzruth/node-enttec-open-dmx-usb"
          npm="enttec-open-dmx-usb"
        >
          Use the Enttec Open DMX USB Interface with Node.js.
        </MyProject>
        <MyProject
          title="eslint-config"
          kind="ESLint Configuration"
          github="moritzruth/eslint-config"
          npm="@moritzruth/eslint-config"
        >
          My personal ESLint configuration.
        </MyProject>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/colors";

  .projects-page__heading {
    margin-top: 0;
  }

  .projects-page__projects {
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
  }
</style>

<script>
  import NavigationBar from "@/components/NavigationBar";
  import MyProject from "@/components/pages/projects/MyProject";

  export default {
    name: "ProjectsPage",
    components: { MyProject, NavigationBar },
    head: () => ({ title: "Projects" })
  };
</script>
