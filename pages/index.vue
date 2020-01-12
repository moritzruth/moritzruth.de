<template>
  <div class="index-page">
    <KNavigationBar background-after-scroll/>
    <AnimatedLogo/>
    <canvas class="index-page__background" ref="canvas"/>
    <main class="index-page__content">
      <div class="index-page__socials">
        <a class="index-page__social-link" href="https://github.com/moritzruth" title="GitHub">
          <GitHubIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="https://twitter.com/moritzruth_dev" title="Twitter">
          <TwitterIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="https://instagram.com/moritzruth_dev" title="Instagram">
          <InstagramIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="mailto:dev@moritz-ruth.de" title="Email">
          <EmailIcon class="index-page__social-icon"/>
        </a>
      </div>
    </main>
    <KFooter class="index-page__footer"/>
  </div>
</template>

<style scoped lang="scss">
  @use "~kiste/css/mixins/screenSize";

  .index-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: calc(100vh - var(--x-navbar-height));
  }

  .index-page__background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;

    z-index: -1;

    animation: appear 2s 1.2s linear both;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .index-page__socials {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .index-page__social-link {
    color: black;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .index-page__social-icon {
    width: 40px;

    transition: 200ms linear opacity;
    &:hover {
      opacity: 0.8;
    }
  }

  .index-page__footer {
    position: absolute;
    padding: 20px 0;

    margin-bottom: 10px;

    @include screenSize.notMobile {
      top: unset;
      bottom: 0;
      right: 0;

      width: fit-content;
      padding: 20px;
      margin: 0;

      flex-direction: row;
    }
  }
</style>

<script>
  import KNavigationBar from "kiste/components/KNavigationBar.vue";
  import KFooter from "kiste/components/KFooter.vue";
  import AnimatedLogo from "@/components/AnimatedLogo.vue";
  import GitHubIcon from "@/assets/icons/github.svg";
  import TwitterIcon from "@/assets/icons/twitter.svg";
  import InstagramIcon from "@/assets/icons/instagram.svg";
  import EmailIcon from "@/assets/icons/email.svg";
  import { BackgroundCanvas } from "@/assets/js/background-canvas";

  export default {
    name: "IndexPage",
    layout: "none",
    components: { AnimatedLogo, GitHubIcon, TwitterIcon, InstagramIcon, EmailIcon, KNavigationBar, KFooter },
    mounted () {
      const backgroundCanvas = new BackgroundCanvas(this.$refs.canvas);

      this.$once("hook:beforeDestroy", () => {
        backgroundCanvas.destroy();
      });
    }
  };
</script>
