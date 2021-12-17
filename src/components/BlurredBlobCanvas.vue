<template>
  <canvas ref="canvasElement" :style="{ filter: `blur(${blur}px)`, height: size + 'px', width: size + 'px' }"/>
</template>

<script>
  import { canvasPath as createBlobAnimation } from "blobs/v2/animate/index.module.js"
  import { ref, watchEffect } from "vue"
  import { useRafFn } from "@vueuse/core"

  function getComponentsOfHexColor(hexColorString) {
    return [
      Number.parseInt(hexColorString.slice(1, 3), 16),
      Number.parseInt(hexColorString.slice(3, 5), 16),
      Number.parseInt(hexColorString.slice(5, 7), 16)
    ]
  }

  export default {
    name: "BlurredBlobCanvas",
    props: {
      colors: {
        type: Array,
        required: true
      },
      size: {
        type: Number,
        required: true
      },
      blur: {
        type: Number,
        default: 30
      },
      minimumDuration: {
        type: Number,
        required: true
      },
      durationVariation: {
        type: Number,
        default: 0
      },
      minimumOpacity: {
        type: Number,
        required: true
      },
      opacityVariation: {
        type: Number,
        default: 0
      },
      points: {
        type: Number,
        default: 4
      },
      randomness: {
        type: Number,
        default: 40
      }
    },
    setup(props) {
      const canvasElement = ref(null)

      // { blob, targetOpacity, opacityTransitionStart }
      let blobs = []

      const getRandomBlobOptions = () => ({
        extraPoints: props.points - 3,
        randomness: props.randomness,
        seed: Math.random(),
        size: props.size
      })

      const getRandomOpacity = () => props.minimumOpacity + (Math.random() * props.opacityVariation)

      watchEffect(onInvalidate => {
        props.colors.forEach(color => {
          const animation = createBlobAnimation()

          const loop = () => {
            animation.transition({
              duration: props.minimumDuration + (Math.random() * props.durationVariation),
              timingFunction: "ease",
              blobOptions: getRandomBlobOptions(),
              callback: loop
            })
          }

          animation.transition({
            duration: 0,
            blobOptions: getRandomBlobOptions(),
            callback: loop
          })

          blobs.push({
            animation,
            color: getComponentsOfHexColor(color),
            opacity: getRandomOpacity()
          })
        })

        onInvalidate(() => {
          blobs.forEach(blob => {
            blob.animation.pause()
          })

          blobs = []
        })
      })

      useRafFn(() => {
        const canvas = canvasElement.value
        if (canvas === null) return
        canvas.width = props.size
        canvas.height = props.size

        const context = canvas.getContext("2d")

        context.clearRect(0, 0, canvas.width, canvas.height)
        blobs.forEach(blob => {
          const [red, green, blue] = blob.color

          context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${blob.opacity})`
          context.fill(blob.animation.renderFrame())
        })
      })

      return {
        canvasElement
      }
    }
  }
</script>
