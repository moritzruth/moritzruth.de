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

<script setup>
  import TopBarLayout from "../components/TopBarLayout.vue"
  import LinkCardList from "../components/LinkCardList.vue"
  import BlurredBlobCanvas from "../components/BlurredBlobCanvas.vue"
  import MatrixIcon from "~icons/simple-icons/matrix"
  import EmailIcon from "~icons/carbon/email"
  
  const links = [
    {
      icon: MatrixIcon,
      href: "https://moritzruth.de/matrix",
      label: "Matrix",
      description: "@moritz:deltaa.xyz"
    },
    {
      icon: EmailIcon,
      href: "mailto:hey@deltaa.xyz",
      label: "Email",
      description: "hey@deltaa.xyz"
    }
  ]
</script>
