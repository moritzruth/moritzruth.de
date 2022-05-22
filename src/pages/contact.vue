<template>
  <TopBarLayout back-target="/" title="Contact">
    <div class="text-lg p-5 max-w-130 mx-auto">
      <div class="space-y-4 text-xl">
        <p>For business inquiries, please use Matrix or Email.</p>
        <p>Matrix should be used when encryption is desired.</p>
      </div>
      <div class="pt-6 relative flex items-center">
        <div class="absolute w-full">
          <BlurredBlobCanvas
            :blur="30"
            :size="200"
            :randomness="80"
            :minimum-duration="600"
            :duration-variation="400"
            :minimum-opacity="0.2"
            :opacity-variation="0.5"
            :colors="['#eb34cf', '#6577fc']"
            class="mx-auto"
          />
        </div>
        <LinkCardList :links="links" class="w-full"/>
      </div>
    </div>
  </TopBarLayout>
</template>

<style module>

</style>

<script>
  import { computed } from "vue"
  import { useRoute } from "vue-router"
  import TopBarLayout from "../components/TopBarLayout.vue"
  import LinkCardList from "../components/LinkCardList.vue"
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"
  import MatrixIcon from "~icons/simple-icons/matrix"
  import TwitterIcon from "~icons/simple-icons/twitter"
  import EmailIcon from "~icons/carbon/email"

  export default {
    name: "ContactPage",
    components: { BlurredBlobCanvas, LinkCardList, TopBarLayout },
    setup() {
      const route = useRoute()

      return {
        links: computed(() => {
          const l = []

          if (route.query.ref === "jamrss") {
            l.push({
              icon: EmailIcon,
              href: "mailto:apps@moritzruth.de",
              label: "Email (regarding apps)",
              description: "apps@moritzruth.de"
            }, {
              icon: EmailIcon,
              href: "mailto:hey@deltaa.xyz",
              label: "Email (everything else)",
              description: "hey@deltaa.xyz"
            })
          } else {
            l.push({
              icon: EmailIcon,
              href: "mailto:hey@deltaa.xyz",
              label: "Email",
              description: "hey@deltaa.xyz"
            })
          }

          l.push(
            {
              icon: MatrixIcon,
              href: "https://moritzruth.de/matrix",
              label: "Matrix",
              description: "@moritz:deltaa.xyz"
            },
            {
              icon: TwitterIcon,
              href: "https://moritzruth.de/twitter",
              label: "Twitter",
              description: "moritzruth"
            }
          )

          return l
        })
      }
    }
  }
</script>
