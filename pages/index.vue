<template>
  <div class="index-page">
    <div class="index-page__background">
      <canvas ref="canvas"/>
      <div class="index-page__background-vignette"></div>
    </div>
    <main class="index-page__content">
      <Logo class="index-page__logo"/>
      <span class="index-page__name">Moritz Ruth</span>
      <div class="index-page__socials">
        <a
          class="index-page__social"
          href="https://instagram.com/moritz_ruth"
          title="Instagram"
        ><InstagramIcon class="index-page__social-icon"/></a>
        <a
          class="index-page__social"
          href="https://twitter.com/moritz_ruth"
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
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/screenSize";
  @use "~@/assets/styles/colors";

  .index-page {
    background: colors.$background;
    color: colors.$background-c;
    width: 100vw;

    animation: 4s ease both fade-in;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .index-page__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;
  }

  .index-page__background-vignette {
    background: radial-gradient(transparent, colors.$background 80%);
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: -100px;
  }

  .index-page__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    height: calc(90vh - var(--navigation-bar-height));
  }

  .index-page__logo {
    height: 400px;
    margin: -120px 0;
    width: 100%;

    position: relative;
    left: 12px;
    pointer-events: none;
  }

  .index-page__name {
    font-size: 2.4rem;
    margin-top: 10px;
    margin-bottom: 20px;
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

    margin: 0 8px;

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
  }
</style>

<script>
  import { ShapedCanvas } from "shaped.js"
  import { footerItems } from "assets/js/footer-items"
  import InstagramIcon from "@/assets/icons/instagram.svg"
  import TwitterIcon from "@/assets/icons/twitter.svg"
  import NPMIcon from "@/assets/icons/npm.svg"
  import GitHubIcon from "@/assets/icons/github.svg"
  import EmailIcon from "@/assets/icons/email.svg"
  import Logo from "@/assets/icons/logo.svg"

  export default {
    name: "IndexPage",
    components: { Logo, InstagramIcon, TwitterIcon, NPMIcon, GitHubIcon, EmailIcon },
    mounted() {
      const shaped = new ShapedCanvas(this.$refs.canvas, {
        useWindowSize: true,
        colors: ["#d21b8d", "#14AAD8"],
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
