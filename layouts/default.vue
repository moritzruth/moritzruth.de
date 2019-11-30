<template>
  <div class="default-layout fill-screen">
    <div class="content default-layout__content">
      <nuxt/>
    </div>
  </div>
</template>

<style>
  .default-layout__content {
    margin-top: var(--navbar-height);
  }
</style>

<script>
  export default {
    name: "DefaultLayout",
    components: {}
  };
</script>
