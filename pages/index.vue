<template>
  <div class="index-page">
    <NavigationBar show-background/>
    <AnimatedLogo/>
    <main class="index-page__content">
      <div class="index-page__name">
        Moritz Ruth
      </div>
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
    <footer class="index-page__footer">
      <nuxt-link
        v-for="link in $options.footer"
        :key="link.to"
        class="index-page__footer-link"
        :to="link.to"
      >
        {{ link.label }}
      </nuxt-link>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .index-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
  }

  .index-page__name {
    animation: appear 800ms 3.5s ease both;

    font-size: 2rem;
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
    top: 100vh;
    left: 0;
    right: 0;

    padding: 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include notMobile {
      top: unset;
      bottom: 0;
      right: 0;

      width: fit-content;
      padding: 20px;

      flex-direction: row;
    }
  }

  .index-page__footer-link {
    color: #606060;
    text-decoration: none;
    flex-shrink: 0;

    margin: 0 10px;

    transition: 100ms linear color;
    &:hover {
      color: $blue;
    }
  }
</style>

<script>
  import AnimatedLogo from "../components/AnimatedLogo";
  import GitHubIcon from "@/assets/icons/github.svg";
  import TwitterIcon from "@/assets/icons/twitter.svg";
  import InstagramIcon from "@/assets/icons/instagram.svg";
  import EmailIcon from "@/assets/icons/email.svg";
  import NavigationBar from "@/components/NavigationBar";
  import { footer } from "@/assets/js/footer";

  export default {
    name: "IndexPage",
    layout: "none",
    components: { NavigationBar, AnimatedLogo, GitHubIcon, TwitterIcon, InstagramIcon, EmailIcon },
    footer
  };
</script>
