<template>
  <main>
    <MyLogo :name="name || 'Moritz Ruth'"/>
    <div class="horizontally-centered">
      <SocialIcon
        v-for="account in $options.socialMedia" :key="account.name"
        :name="account.name" :username="account.username" :invert="!!account.invertLogoColor"
        @mouseover.native="name = account.username" @mouseleave.native="name = null"
      />
    </div>
    <div class="link-section">
      <nuxt-link class="button" to="/projects">My Projects</nuxt-link>
      <nuxt-link class="button" to="/uses">What I’m using</nuxt-link>
    </div>
  </main>
</template>

<script>
  import SocialIcon from "@/components/SocialIcon";
  import MyLogo from "@/components/MyLogo";

  const socialMedia = [
    {
      name: "github",
      username: "moritzruth",
      invertLogoColor: true
    },
    {
      name: "twitter",
      username: "moritzruth_dev",
      invertLogoColor: true
    },
    {
      name: "instagram",
      username: "moritzruth_dev",
      invertLogoColor: true
    },
    {
      name: "keybase",
      username: "moritzruth"
    },
    {
      name: "npm",
      username: "moritzruth",
      invertLogoColor: true
    }
  ];

  export default {
    name: "index",
    components: { MyLogo, SocialIcon },
    data: () => ({
      name: null,
    }),
    socialMedia
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_responsive";
  @import "~@/assets/css/_mixins";

  main {
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    background: linear-gradient(135deg, rgba(31,244,255,1) 0%, rgba(91,100,166,1) 100%);

    .link-section {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;

      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .button {
        margin: 10px;

        &::before {
          content: "";
          display: inline-block;
          margin-right: 10px;
          margin-left: -5px;
          @include arrow(12px, 90deg, white);
        }
      }
    }
  }
</style>
