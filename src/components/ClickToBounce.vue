<template>
  <div ref="wrapper" class="select-none">
    <slot :setTrigger="setTrigger"/>
  </div>
</template>

<script>
  import { ref, watchEffect } from "vue"
  import KUTE from "kute.js"

  export default {
    name: "ClickToBounce",
    setup() {
      const trigger = ref(null)
      const wrapper = ref(null)

      let current = null

      watchEffect(onInvalidate => {
        if (trigger.value !== null) {
          const listener = () => {
            current?.stop()

            current = KUTE.to(wrapper.value, { scale: 0.9 }, {
              duration: 100,
              easing: "easingElasticInOut",
              onComplete() {
                current = KUTE.to(wrapper.value, { scale: 1 }, {
                  duration: 100,
                  easing: "easingElasticInOut",
                  onComplete() {
                    current = null
                  }
                }).start()
              }
            }).start()
          }

          trigger.value.addEventListener("click", listener, { passive: true })

          onInvalidate(() => {
            trigger.value.removeEventListener("click", listener)
          })
        }
      })

      return {
        setTrigger(element) {
          trigger.value = element
        },
        wrapper
      }
    }
  }
</script>
