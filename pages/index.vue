<template>
  <main class="index-page">
    <div class="index-page__hero">
      <AnimatedLogo/>
    </div>
  </main>
</template>

<style>
  .index-page__hero {
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
