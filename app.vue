<template>
  <div class="h-100vh w-100vw text-light-100 overflow-x-hidden">
    <NuxtPage/>
  </div>
</template>

<style module>
  html, body {
    @apply bg-background;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
  }
</style>

<script>
  export default {
    name: "App"
  }
</script>
