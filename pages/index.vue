<template>
  <div id="index">
    <CtexxxLogo :text="logoText"/>
    <div class="horizontally-centered">
      <SocialIcon
        v-for="account in socialMedia" :key="account.name"
        :name="account.name" :username="account.username" :invert="!!account.invertLogoColor"
        @mouseover.native="logoText = account.username" @mouseleave.native="logoText = null"
      />
    </div>
  </div>
</template>

<script>
  import CtexxxLogo from "@/components/CtexxxLogo";
  import SocialIcon from "@/components/SocialIcon";

  const socialMedia = [
    {
      name: "github",
      username: "ctexxx",
      invertLogoColor: true
    },
    {
      name: "twitter",
      username: "cte3x",
      invertLogoColor: true
    },
    {
      name: "instagram",
      username: "cte3x",
      invertLogoColor: true
    },
    {
      name: "keybase",
      username: "ctexxx"
    }
  ];

  export default {
    name: "index",
    components: { SocialIcon, CtexxxLogo },
    data: () => ({
      logoText: "ctexxx",
      socialMedia
    })
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_responsive.scss";

  #index {
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
</style>
