<template>
  <NotFoundPage object-name="page" back-target="/"/>
</template>

<script>
  import ArrowLeftIcon from "~icons/ph/arrow-left"
  import XSpacer from "../components/XSpacer.vue"
  import NotFoundPage from "../components/NotFoundPage.vue"

  export default {
    name: "FallbackPage",
    components: { NotFoundPage, XSpacer, ArrowLeftIcon }
  }
</script>
