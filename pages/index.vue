<template>
  <div class="index-page">
    <NavigationBar background-after-scroll title="Start"/>
    <canvas ref="canvas" class="index-page__background"/>
    <main class="index-page__content">
      <AnimatedLogo/>
      <div class="index-page__socials">
        <a
          class="index-page__social"
          href="https://instagram.com/moritz_ruth"
          title="Instagram"
        ><InstagramIcon class="index-page__social-icon"/></a>
        <a
          class="index-page__social"
          href="httpsU
          ://twitter.com/moritz_ruth"
          title="Twitter"
        ><TwitterIcon class="index-page__social-icon"/></a>
        <a
          class="index-page__social"
          href="https://npmjs.org/~moritzruth"
          title="NPM"
        ><NPMIcon class="index-page__social-icon"/></a>
        <a
          class="index-page__social"
          href="https://github.com/moritzruth"
          title="GitHub"
        ><GitHubIcon class="index-page__social-icon"/></a>
        <a
          class="index-page__social"
          href="mailto:dev@moritzruth.de"
        ><EmailIcon class="index-page__social-icon"/></a>
      </div>
    </main>
    <footer class="index-page__footer">
      <nuxt-link
        v-for="item in $options.footerItems"
        :key="item.label"
        class="index-page__footer-link"
        :to="item.to"
        @click.native.passive="() => { open = null }"
      >
        {{ item.label }}
      </nuxt-link>
    </footer>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/screenSize";
  @use "~@/assets/styles/colors";

  .index-page {
    background: colors.$background;
    color: colors.$background-c;
    width: 100vw;
  }

  .index-page__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .index-page__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    height: calc(90vh - var(--navigation-bar-height));
  }

  .index-page__socials {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .index-page__social {
    text-decoration: none;
    position: relative;

    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 4px;
    }

    &:hover, &:focus-within {
      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: linear-gradient(-135deg, colors.$blue, colors.$pink 80%);
      pointer-events: none;
      mix-blend-mode: lighten;

      opacity: 0;
      transition: 200ms opacity ease;
    }
  }

  .index-page__social-icon {
    color: colors.$background-c;
    height: 40px;
    margin-right: 10px;
  }

  .index-page__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 20px;

    opacity: 0.8;
    transition: 200ms linear opacity;

    &:hover {
      opacity: 1;
    }

    .index-page__footer-link {
      text-decoration: none;
      color: colors.$background-c;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  @include screenSize.mobile {
    .index-page__social-icon {
      height: 30px;
    }
  }
</style>

<script>
  import { ShapedCanvas } from "shaped.js"
  import AnimatedLogo from "@/components/AnimatedLogo"
  import NavigationBar from "@/components/NavigationBar"
  import { footerItems } from "assets/js/footer-items"
  import InstagramIcon from "@/assets/icons/instagram.svg"
  import TwitterIcon from "@/assets/icons/twitter.svg"
  import NPMIcon from "@/assets/icons/npm.svg"
  import GitHubIcon from "@/assets/icons/github.svg"
  import EmailIcon from "@/assets/icons/email.svg"

  export default {
    name: "IndexPage",
    layout: "empty",
    components: { NavigationBar, AnimatedLogo, InstagramIcon, TwitterIcon, NPMIcon, GitHubIcon, EmailIcon },
    mounted() {
      const shaped = new ShapedCanvas(this.$refs.canvas, {
        useWindowSize: true,
        colors: ["#BB2081", "#14AAD8"],
        minCount: 8,
        probability: 1 / 30000,
        height: 1,
        length: [80, 150],
        speed: [0.2, 0.5]
      })

      this.$once("hook:beforeDestroy", () => shaped.stop())
    },
    head: () => ({ title: "Moritz Ruth creates things", titleTemplate: "%s" }),
    footerItems
  }
</script>
