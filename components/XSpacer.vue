<template>
  <div :style="{ height, width }"/>
</template>

<style module>

</style>

<script>
  export default {
    name: "XSpacer",
    props: {
      v: {
        default: 0,
        type: null,
        validate: value => ["number", "string"].includes(typeof value)
      },
      h: {
        default: 0,
        type: null,
        validate: value => ["number", "string"].includes(typeof value)
      }
    },
    setup(props) {
      return {
        height: (props.v * 0.25) + "rem",
        width: (props.h * 0.25) + "rem"
      }
    }
  }
</script>
