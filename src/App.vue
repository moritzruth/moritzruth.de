<template>
  <div class="h-100vh w-100vw text-light-100 overflow-x-hidden">
    <router-view v-slot="{ Component }">
      <suspense>
        <component :is="Component"/>
      </suspense>
    </router-view>
  </div>
</template>

<style module>
  html, body {
    @apply bg-background;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    font-size: 17px;
  }
</style>

<script>
  export default {
    name: "App"
  }
</script>
