<template>
  <main>
    <h1 class="title">My Projects</h1>
    <div class="projects">
      <CodingProject
        title="OW Workshop Search"
        github="ctexxx/ow-workshop"
        type="Website"
        liveURL="https://ow-workshop.ctexxx.dev"
      >
        <p>
          Find cool workshop codes for Overwatch.
        </p>
      </CodingProject>
      <CodingProject
        title="shxrt"
        github="ctexxx/shxrt"
        type="Node.js script"
      >
        <p>
          URL shortener service intended to be used with <a href="https://now.sh">now</a> and
          <a href="https://graph.cool">GraphCool</a>.
        </p>
        <p>
          Powering <a href="https://go.ctexxx.dev">go.ctexxx.dev</a>.
        </p>
      </CodingProject>
      <CodingProject
        title="pzl"
        npm="@ctexxx/pzl"
        github="ctexxx/pzl"
        type="Node.js library"
      >
        Pretty zero-configuration console logger.
      </CodingProject>
      <CodingProject
        title="singleinstancelock"
        npm="singleinstancelock"
        github="ctexxx/singleinstancelock"
        type="Node.js library"
      >
        Allow only one instance of your script at a time.
      </CodingProject>
      <CodingProject
        title="schweredruck-simulation"
        github="ctexxx/schweredruck-simulation"
        type="Application (german)"
        liveURL="https://app.ctexxx.dev/schweredruck-simulation/"
      >
        Simulate and compute the weight pressure in different fluids.
      </CodingProject>
    </div>
  </main>
</template>

<script>
  import CodingProject from "@/components/CodingProject";
  export default {
    name: "projects",
    components: { CodingProject },
    layout: "secondLevel"
  };
</script>

<style scoped lang="scss">
  .projects {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
</style>
