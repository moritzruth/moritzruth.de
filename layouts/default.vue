<template>
  <div class="default-layout">
    <nuxt/>
    <MyFooter/>
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
  import MyFooter from "@/components/MyFooter";

  export default {
    name: "DefaultLayout",
    components: { MyFooter }
  };
</script>
