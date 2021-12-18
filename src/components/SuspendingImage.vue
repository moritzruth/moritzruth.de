<template>
  <img :src="objectUrl" :alt="alt">
</template>

<style module>

</style>

<script>
  import { $fetch } from "ohmyfetch"

  const waitForAnimationFrame = () => new Promise(resolve => requestAnimationFrame(resolve))

  const asyncSetup = async src => {
    const blob = await $fetch(src)
    await waitForAnimationFrame()
    return {
      objectUrl: URL.createObjectURL(blob)
    }
  }

  export default {
    name: "SuspendingImage",
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },
    setup(props) {
      if (typeof window === "undefined") {
        return {
          objectUrl: props.src
        }
      } else {
        return asyncSetup(props.src)
      }
    }
  }
</script>
