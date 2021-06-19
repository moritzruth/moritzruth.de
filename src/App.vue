<template>
  <NavigationMenu/>
  <div class="overflow-x-hidden">
    <div class="bg-white text-black max-w-1200px mx-auto px-6 sm:px-10">
      <router-view/>
    </div>
  </div>
</template>

<style>
  body {
    font-size: 20px;
  }
</style>

<script>
  import NavigationMenu from "./components/NavigationMenu.vue"

  export default {
    name: "App",
    components: { NavigationMenu }
  }
</script>
