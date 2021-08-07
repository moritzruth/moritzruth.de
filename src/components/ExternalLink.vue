<template>
  <a
    class="text-blue-700"
    target="_blank"
    rel="noopener noreferrer"
    :href="href"
  ><slot/></a>
</template>

<style module>

</style>

<script>
  export default {
    name: "ExternalLink",
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
</script>
