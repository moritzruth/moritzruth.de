<template>
  <main>
    <div class="projects">
      <CodingProject
        title="pzl"
        npm="@ctexxx/pzl"
        github="ctexxx/pzl"
      >
        A tiny zero-configuration console logger
      </CodingProject>
      <CodingProject
        title="shxrt"
        github="ctexxx/shxrt"
      >
        <p>
          A URL shortener service intended to be used with <a href="https://now.sh">now</a> and
          <a href="https://graph.cool">graph.cool</a>.
        </p>
        <p>
          Powering <a href="https://go.ctexxx.dev">go.ctexxx.dev</a>
        </p>
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
    justify-content: space-evenly;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
  }
</style>
