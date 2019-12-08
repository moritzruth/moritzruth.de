<template>
  <div class="default-layout fill-screen">
    <KApp>
      <nuxt/>
      <KFooter/>
    </KApp>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
  import KApp from "kiste/components/KApp";
  import KFooter from "kiste/components/KFooter";

  export default {
    name: "DefaultLayout",
    components: { KApp, KFooter }
  };
</script>
