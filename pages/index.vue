<template>
  <main class="index-page">
    <AnimatedLogo/>
  </main>
</template>

<style>
  .index-page {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
  }
</style>

<script>
  import AnimatedLogo from "../components/AnimatedLogo";

  export default {
    name: "IndexPage",
    components: { AnimatedLogo }
  };
</script>
