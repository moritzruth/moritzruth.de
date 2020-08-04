<template>
  <div class="default-layout">
    <NavigationBar/>
    <nuxt/>
  </div>
</template>

<style scoped lang="scss">
  .default-layout {
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
</style>

<script>
  import NavigationBar from "@/components/NavigationBar"

  export default {
    name: "DefaultLayout",
    components: { NavigationBar }
  }
</script>
