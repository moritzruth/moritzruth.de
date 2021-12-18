<template>
  <div class="pt-40 px-5 flex flex-col items-center">
    <div class="font-bold text-3xl text-center">
      This&nbsp;{{ objectName }} does not&nbsp;exist.
    </div>
    <XSpacer v="5"/>
    <router-link :to="backTarget" class="flex items-center">
      <ArrowLeftIcon/>
      <XSpacer h="2"/>
      <div class="text-lg">
        Back
      </div>
    </router-link>
  </div>
</template>

<style module>

</style>

<script>
  import ArrowLeftIcon from "~icons/ph/arrow-left"
  import XSpacer from "../components/XSpacer.vue"

  export default {
    name: "NotFoundPage",
    components: { XSpacer, ArrowLeftIcon },
    props: {
      objectName: {
        type: String,
        required: true
      },
      backTarget: {
        type: String,
        required: true
      }
    }
  }
</script>
