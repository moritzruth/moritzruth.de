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
  import { Canvas } from "shaped.js";
  import AnimatedLogo from "@/components/AnimatedLogo.vue";
  import GitHubIcon from "@/assets/icons/github.svg";
  import TwitterIcon from "@/assets/icons/twitter.svg";
  import InstagramIcon from "@/assets/icons/instagram.svg";
  import EmailIcon from "@/assets/icons/email.svg";

  const COLORS = [
    "rgba(0, 0, 0, 0.8)",
    "rgba(0, 255, 150, 0.8)",
    "rgba(0, 255, 150, 0.2)",
    "rgba(0, 150, 255, 0.8)",
    "rgba(0, 150, 255, 0.2)"
  ];

  const LINES = [
    {
      minCount: 8,
      probability: 1 / 10000,
      height: 2,
      length: 100,
      speed: [-0.2, 0.2],
      colors: COLORS
    },
    {
      minCount: 8,
      probability: 1 / 50000,
      height: 5,
      length: [20, 200],
      speed: [0.2, 0.3],
      colors: COLORS,
      randomizeYAfterLeave: true
    },
    {
      probability: 1 / 50000,
      height: 50,
      length: 50,
      speed: [0.2, 0.5],
      colors: COLORS
    },
    {
      probability: 1 / 5000,
      height: 3,
      length: 3,
      speed: [-1, 1],
      colors: COLORS
    },
    {
      minCount: 8,
      probability: 1 / 50000,
      height: [20, 200],
      length: [20, 200],
      speed: [0.2, 0.3],
      colors: COLORS,
      randomizeYAfterLeave: true
    },
    {
      probability: 1 / 5000,
      height: [20, 200],
      length: 2,
      speed: [-0.2, 0.2],
      colors: COLORS
    }
  ];

  export default {
    name: "IndexPage",
    layout: "none",
    components: { AnimatedLogo, GitHubIcon, TwitterIcon, InstagramIcon, EmailIcon, KNavigationBar, KFooter },
    mounted () {
      let nextConfig = 0;

      if (localStorage !== undefined) {
        const rawValue = localStorage.getItem("nextBackground");

        if (rawValue) {
          try {
            nextConfig = JSON.parse(rawValue);
            // eslint-disable-next-line no-empty
          } catch {}
        }
      }

      if (nextConfig > LINES.length - 1) {
        nextConfig = 0;
      }

      if (localStorage !== undefined) {
        localStorage.setItem("nextBackground", nextConfig + 1);
      }

      const config = LINES[nextConfig];
      const backgroundCanvas = new Canvas(this.$refs.canvas, {
        lines: config,
        fillWindowSize: true
      });

      this.$once("hook:beforeDestroy", () => {
        backgroundCanvas.destroy();
      });
    }
  };
</script>
