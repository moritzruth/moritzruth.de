<template>
  <main>
    <h1 class="title">What I’m using</h1>
    <div class="uses">
      <ImageCard
        title="WebStorm"
        :image="require('~/assets/images/webstorm.png')"
        type="IDE"
        link="https://www.jetbrains.com/webstorm/"
      >
        I use WebStorm for everything I code because I don’t like VSCode and I’m a student, so all JetBrains products are free for me 😎.
      </ImageCard>
      <ImageCard
        title="MSI CX72-7QL"
        image="https://asset.msi.com/resize/image/global/product/product_8_20170117101522_587d7e3ae17ae.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
        type="Laptop"
        link="https://www.amazon.de/MSI-001797-034-CX72-7QL-034/dp/B06WLM6581"
      >
        Originally bought for gaming, I now only use it for coding.
      </ImageCard>
      <ImageCard
        title="Ubuntu 19.04"
        image="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"
        type="OS"
      >
        It just works.
      </ImageCard>
      <ImageCard
        title="Hyper"
        image="https://assets.zeit.co/image/upload/front/assets/design/hyper-color-logo.svg"
        type="Terminal"
        link="https://hyper.is/"
      >
        Plugins: <code>hyper-snazzy</code>, <code>hypercwd</code>.
      </ImageCard>
      <ImageCard
        title="Fira Code"
        :image="require('~/assets/images/fira_code.png')"
        type="Font"
        link="https://github.com/tonsky/FiraCode"
      >
        Love at first sight.
      </ImageCard>
    </div>
  </main>
</template>

<script>
  import ImageCard from "@/components/ImageCard";
  export default {
    name: "uses",
    components: { ImageCard },
    layout: "secondLevel"
  };
</script>

<style scoped lang="scss">
  .uses {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
</style>
