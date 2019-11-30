<template>
  <main class="index-page">
    <AnimatedLogo/>
    <div class="index-page__content">
      <div class="index-page__name">
        Moritz Ruth
      </div>
      <div class="index-page__socials">
        <a class="index-page__social-link" href="https://github.com/moritzruth">
          <GitHubIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="https://twitter.com/moritzruth_dev">
          <TwitterIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="https://instagram.com/moritzruth_dev">
          <InstagramIcon class="index-page__social-icon"/>
        </a>
        <a class="index-page__social-link" href="mailto:dev@moritz-ruth.de">
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

  .index-page__content {
    animation: appear 400ms 4s ease both;

    font-size: 1.5rem;
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
      margin-right: 10px;
    }
  }

  .index-page__social-icon {
    width: 50px;

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

  export default {
    name: "IndexPage",
    components: { AnimatedLogo, GitHubIcon, TwitterIcon, InstagramIcon, EmailIcon }
  };
</script>
