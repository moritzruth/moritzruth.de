<template>
  <svg :style="{ width: size, height: size, filter: `blur(${blur}px)` }">
    <path
      v-for="(blob, index) in blobs"
      :key="index"
      :ref="blob"
      style="transition: 2000ms; transition-property: opacity, transform; transform-origin: center"
      d=""
    />
  </svg>
</template>

<script>
  import * as blobs2 from "blobs/v2"
  import KUTE from "kute.js"
  import { ref } from "vue"
  import { getListOfIndexes } from "../getListOfIndexes.js"

  const BLOB_OPTIONS = {
    extraPoints: 6,
    randomness: 30
  }

  // let lastMouseEvent = null
  // let currentMouseEvent = null
  // let mouseSpeed = 0
  //
  // window.addEventListener("mousemove", event => {
  //   currentMouseEvent = event
  // })
  //
  // setInterval(() => {
  //   if (currentMouseEvent !== null && lastMouseEvent !== null && currentMouseEvent !== lastMouseEvent) {
  //     const deltaX = currentMouseEvent.screenX - lastMouseEvent.screenX
  //     const deltaY = currentMouseEvent.screenY - lastMouseEvent.screenY
  //     mouseSpeed = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY))
  //   } else {
  //     mouseSpeed = 0
  //   }
  //
  //   lastMouseEvent = currentMouseEvent
  //   console.log(mouseSpeed)
  // }, 100)

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
      }
    },
    data() {
      return {
        // eslint-disable-next-line unicorn/no-new-array
        blobs: getListOfIndexes(this.colors.length).map(() => ref(null))
      }
    },
    mounted() {
      const animate = index => {
        const blob = this.blobs[index]
        const duration = (Math.random() * this.durationVariation) + this.minimumDuration

        if (blob.value) {
          KUTE.to(
            blob.value,
            {
              path: blobs2.svgPath(this.getRandomBlobOptions())
            },
            {
              duration,
              morphPrecision: 5,
              easing: "easingSinusoidalInOut",
              onComplete() {
                animate(index)
              }
            }
          ).start()

          this.setOpacity(blob.value)
        }
      }

      requestAnimationFrame(() => {
        this.blobs.forEach((blob, index) => {
          blob.value.setAttribute("d", blobs2.svgPath(this.getRandomBlobOptions()))

          blob.value.setAttribute("fill", this.colors[index])
          this.setOpacity(blob.value)

          animate(index)
        })
      })
    },
    methods: {
      getRandomBlobOptions() {
        return {
          ...BLOB_OPTIONS,
          seed: Math.random(),
          size: this.size
        }
      },
      setOpacity(element) {
        element.style.opacity = (Math.random() * this.opacityVariation) + this.minimumOpacity
      }
    }
  }
</script>
