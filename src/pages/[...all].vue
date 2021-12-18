<template>
  <NotFoundPage object-name="page" back-target="/"/>
</template>

<script>
  import NotFoundPage from "../components/NotFoundPage.vue"

  export default {
    name: "FallbackPage",
    components: { NotFoundPage }
  }
</script>
