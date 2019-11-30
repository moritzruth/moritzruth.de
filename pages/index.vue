<template>
  <main class="index-page">
    <NavigationBar show-background/>
    <AnimatedLogo/>
    <div class="index-page__content">
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
    </div>
  </main>
</template>

<style scoped lang="scss">
  .index-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
  }

  .index-page__name {
    animation: appear 400ms 3.8s ease both;

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
</style>

<script>
  import AnimatedLogo from "../components/AnimatedLogo";
  import GitHubIcon from "@/assets/icons/github.svg";
  import TwitterIcon from "@/assets/icons/twitter.svg";
  import InstagramIcon from "@/assets/icons/instagram.svg";
  import EmailIcon from "@/assets/icons/email.svg";
  import NavigationBar from "@/components/NavigationBar";

  export default {
    name: "IndexPage",
    layout: "none",
    components: { NavigationBar, AnimatedLogo, GitHubIcon, TwitterIcon, InstagramIcon, EmailIcon }
  };
</script>
