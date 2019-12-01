<template>
  <a
    class="external-link link"
    rel="noopener"
    target="_blank"
    :href="href"
  >{{ label || href }}<ExternalIcon class="external-link__icon"/></a>
</template>

<style scoped lang="scss">
  .external-link {
    padding-right: 5px;
    overflow-wrap: break-word;
  }

  .external-link__icon {
    margin-left: 5px;

    width: 15px;
    position: relative;
    top: 2px;
  }
</style>

<script>
  import ExternalIcon from "@/assets/icons/external.svg";

  export default {
    name: "ExternalLink",
    components: { ExternalIcon },
    props: {
      href: {
        type: String,
        required: true
      },
      label: {
        type: String,
        default: null
      }
    }
  };
</script>
